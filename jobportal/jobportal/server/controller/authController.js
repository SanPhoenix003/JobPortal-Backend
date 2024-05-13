import express from "express";
import userSchema from "../models/userSchema.js";
import  errormiddleware  from "../errorMiddleware/errormiddeware.js";
import bcrypt from 'bcryptjs';
 function register(req,res,next){
    try{
        const {name,email,password} = req.body
    //check info is empty or not.validation
    if(!name){
        // return res.status(400).send({success:false,message:'enter the name'})
        next('enter the name')
    }
    if(!email){
        // return res.status(400).send({success:false,message:'enter the mail'})
        next('enter the mail')
    }
    if(!password){
        // return res.status(400).send({success:false,message:'enter the passwo'})
        next('enter the passwo')
    }

    //check for existin shit by using mongodb functions
    const existinguser =  userSchema.findOne(email)
    if(!existinguser){
    //    return res.status(200).send({success:true,message:'mail already exists'})
       next('mail already exists')
    }
    
    // create user 
    const newuser = {
        name : name,
        email: email,
        password : bcrypt.hashSync(password)
    }
    
   const user =  userSchema.create(newuser)
   res.status(200).send({ success:true,message:'user created',user})
}catch(err){
    // res.status(400).send({ success:false,message:'error in user creation',err})
    next('error in user creation')
}

}
export default register