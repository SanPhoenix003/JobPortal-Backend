import userSchema from "../models/userSchema.js";
import bcrypt from 'bcryptjs';
async function loginController(req, res){
    try {
        const { email, password } = req.body
        if (!email && !password) {
            res.status(400).send({ success: false, message: "enter all fields" })
        }

        const user = await userSchema.findOne({email})
        
        if (!user) {
            res.status(400).send({ success: false, message: "invalid mail" })
        }
        
        const ispassword = bcrypt.compareSync(password,user.password)
        console.log(ispassword)
        if(!ispassword){
            res.status(400).json({ success: false, message: "incorrect pwd" })
        }
        
        res.status(200).send({ success: true, message: "logged in" })
            
        
    } catch (err) {
        console.log(err)
    }
}
export default loginController