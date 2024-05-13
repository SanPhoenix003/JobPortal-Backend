import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

    company: {
        type: String,
        // required: true.....can also give error ms if the required field is not filled
        required:[true,"comapny name is neccessary"]
    },
    position: {
        type: String,
        required: true
    },
    worklocation: {
        type: String,
        default:'delhi',
        required:true
    },
    worktype: {
        type: String,
        default:'remote'
    },
    jobtype: {
        type: String,
        default:"developer",
        required :[true,"this is imp"]
    }
},//object can also be given like timestamps to store the time when job is created
{timestamps:true}
)

export default mongoose.model('Jobs',jobSchema)