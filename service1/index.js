const express=require("express");

const app=express();

app.get('/',(req,res)=>{
    res.json({success:true, message:"response from service 1"})
});

app.listen(8000,()=>{
    console.log('service 1 running on port 8000')
})