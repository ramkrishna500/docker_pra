const express= require("express");
const app=express();

const PORT=3000;

app.get("/",function(req,res){
    return res.send("welcome to first tutor   ial hjvj 1");
})

app.listen(PORT,function(){
    console.log("successfully connected...");
})






