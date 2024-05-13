import  express  from "express";
import testing from "../controller/controller.js";

const route = express.Router()
//testin is written due to change in controller.js
route.get('/',testing)

export default route