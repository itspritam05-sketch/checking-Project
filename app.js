import express from 'express';

const app = express();

app.get('/profile',(req,res) => {
    try{
        const user= User.findById(req.user.id).select("password")
        res.json({
            user
        })
    }catch(error){
        console.log("User Failed to Login!!")
        console.log(error)
    }
});



app.listen(process.env.PORT || 4000, () => {
    console.log(`Server Running on port:${process.nextTick.PORT}`)
})