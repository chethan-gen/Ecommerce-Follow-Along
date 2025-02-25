const express = require('express');

const app = express();


app.use("/",(request,response)=>{
    try{
        response.status(200).send({message:"this is e-commerce code along backend",data:[
            {title:"test"},
            {title:"test2"},
        ]})
    }catch(error){
        response.status(500).send({message:"error occured"});

    }
})
app.listen(8080,()=>{
    try{
        console.log("server is running on port 8080");
    }catch(error){
        console.log("error occured");
    }
})