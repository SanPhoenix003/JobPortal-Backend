import jobSchema from '../models/jobSchema.js'
import CircularJSON from "circular-json";

export const createjobController = async(req,res,next)=>{
    const {company,position,jobtype} = req.body
   
    if(!company&&!position){
        next('enter company or postion')
    }
    if(jobtype === "teaching"){
        next('not allowed teaching')
    }
    const newjob = {
        company,
        position,
        jobtype
    }
    const job = await jobSchema.create(newjob)
    res.status(200).json({
        success:true,
        message:'job created'
    })
}

export const getalljobController = async(req,res,next)=>{
    const jobs =await jobSchema.find(); // Your job data
    res.status(200).send({
        success:true,
        jobs,
        totaljobs : jobs.length
    })
}

export const updateJobController = async(req,res,next)=>{
    const {id} = req.params
    const {position,worklocation} = req.body
    if(!position&&!worklocation){
        next('provide position and worklocation')
    }
    const job = await jobSchema.findOne({_id:id})
    if(!job){
        next(`no job found with id ${id}`)
    }
    const updateJob = await jobSchema.findOneAndUpdate({_id:id},{
        position: position,
        worklocation: worklocation   //or give req.body as we are recieving this from user
    })
    res.status(200).json({
        updateJob
    })
}

export const deleteJobController = async(req,res,next)=>{
    const {id} = req.params
    const job = await jobSchema.findOne({_id:id})
    console.log(job)
    if(job){
        
    
    await job.deleteOne({_id:id})
    res.status(200).json({
        success:true,
        message:"deleted succesfully"
    })}
    else{
        next('no job found')
    }
}


