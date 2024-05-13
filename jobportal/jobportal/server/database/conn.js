import mongoose from "mongoose";

//  mongoose.connect(process.env.MONGODB).then(()=>{
//    console.log('success connected')
//  })
// use sync await,as we need to wait for the db to connect...we dont want to continue to nxt 
// step with conectin db
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB)
        console.log('success connected')
    }catch(error){
        console.log(`failed conn db ${error}`)
    }
}
//export the component
export default connectDB