// 1.npx create-react-app job
// 2. create server folder and install packaes with cmd npx init -y and install express with npm i express
// 3.create server.js file
{/*  
4.to use inport func write type:module in packae.json
5. npm install nodemon.....change in package.json --- scripts
    now i can run the server with cmd npm start
6. create .env file...this make the links secure as this file is skipped when project is uploaded to github
7. install dotenv pk in server...to access vars in .env file,use process.env
    import dotenv module and use dotenv.config()
8.created an acc in cloud mongodb and created new project named job
    after creatin db..goto network access and select access from anywhere option
    npm install mongoose
    in mongodb website...db>connet>drivers>copy link
    import mongoose and use mongoose.connect(is a promise so use .then) to connect to db.....
9.connectin to db is written in seperate folder database>conn.js
    GO TO CONN.JS
10.use connectDB component by import connectDB from "./database/conn.js"....js extension is a must
11. create controller>controller.js,routes>route.js
    paste api or .et code in route.js
12. import route from route.js(middleware)
13.install cors

14.write code in controller.js....from route.js
15. create models folder for schema of db
    use in-built middleware app.use(express.json()) for json data handling
16. goto models>userSchema.js to define user schemas like name,email
    mongoose.Schema is an in-built func for database
17. create jobSchema.js for jobs \
18. create authRoute,js for registration
    create authController.js for postin the data and checkin
19. controller.js and route.js are not req now
20. create logincontroller.js for login and register
21. create miidleware folder....middleware is for haldin errors so code is not repeated
    middleware func should always (req,res,next)
    use the middleware in server file i.e., server.js by app.use
22. as password is saved as it is without any security...to provide security bcryptjs and
    jwt for authencation is used
    npm i bcryptjs
23. create job controller file and write jobroute and import it in server file
24. create getalljobs in jobcontroller.js,the typeerror Converting circular structure to 
    JSON can be solve using async and await
    added jobtype in database,createjobcontrooler
25. now to update a job put method is used 
            delete a job, delete method is used
    now when updating and deleting a job that job id is also given
 so route.put('/update-job/:id',) --> to update every detail
    route.patch('/update-job/:id',) --> to update single detail
    route.delete('/delete-job/:id',) are used....:id is for dynamic as the id changes
*/}

// const express = require('express') ..>after 4th step
import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import connectDB from "./database/conn.js"
import jobroute from "./routes/jobRoute.js"
import route from "./routes/authRoute.js"
import cors from "cors"

import errormiddleware from "./errorMiddleware/errormiddeware.js"
const app = express()  //if there are no () app.get is not a func error

dotenv.config()
const port = process.env.port

//10. connect to db
connectDB()

//11. app.get('/',(req,res)=>{
//     res.json({msg:"hello"})
// }) -- > route.js

app.use(express.json())
app.use(cors())
//middleware
app.use(route)
app.use(jobroute)
app.use(errormiddleware)
// connectDB.then(() => {
app.listen(port, () => {
    console.log(`running ${port}`)
})
// })


//9. mongoose.connect(process.env.MONGODB).then(()=>{
//     console.log('success connected')
// }) --->in conn.js file