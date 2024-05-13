function errormiddleware(err,req,res,next){
    res.status(500).send({ 
        success:false,
        message:'somethin went wrong',
        err})
}
export default errormiddleware