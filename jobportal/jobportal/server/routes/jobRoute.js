import express from "express"
import {createjobController,deleteJobController,getalljobController, updateJobController} from "../controller/jobController.js"

const route = express.Router()

route.post('/create-job',createjobController)
route.get('/get-job',getalljobController)


route.patch('/update-job/:id',updateJobController)
route.delete('/delete-job/:id',deleteJobController)


export default route