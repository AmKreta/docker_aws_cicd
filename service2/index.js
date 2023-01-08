const express=require("express");

const app=express();

app.get('/',(req,res)=>{
    res.json({success:true, message:"response from service 2"})
});

app.listen(8000,()=>{
    console.log('service 2 running on port 8000')
})