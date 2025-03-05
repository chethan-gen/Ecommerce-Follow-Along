/*const express = require('express');

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
}) */

const express = require('express');
const app = express();
const connect = require("./mongoDB.JS")

app.get("/",(req,res)=>{
    try {
        res.status(200).send({message:"this is E-commerece - code -Along -Backend"});
    } catch (error) {
        res.status(500).send({message:"something went wrong"});
        
    }
})

app.listen(8000,async()=>{
    try {
        await connect();
        console.log("server is running on port 8000");
    } catch (error) {
       console.log("server not connected",error) 
    }
})