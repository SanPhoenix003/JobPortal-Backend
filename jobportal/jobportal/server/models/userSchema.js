import mongoose from "mongoose";
import validator from "validator";
{/*
16-1. validation of user can be done from fronted and backend part
        install validator pkg
        validation is with func isEmail(str,[,options])
16-2. after creatin schema import the model by using 
        export default mongoose.model('users',userSchema)
*/}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: true
    },
    // },
    // phone:{
    //     type:Number,
    //     required:true
    // },
    location: {
        type: String, default: "vijayawada"
    }
},
{timestamps:true})
export default mongoose.model('Users', userSchema)
//                             |_>users is document name