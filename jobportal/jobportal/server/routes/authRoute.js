import register from "../controller/authController.js"
import express from "express"
import loginController from "../controller/loginController.js"
const route = express.Router()

route.post('/register',register)

route.post('/login',loginController)
export default route