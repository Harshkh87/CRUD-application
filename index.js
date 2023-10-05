const express = require('express');
const con = require("./config");
const app= express();
 
app.use(express.json());

// get the data from db(mysql) to postman and server(5000)
app.get("/",(request,response)=>{
    con.query("select * from bonus",(err,result)=>{
        if(err){
            response.send(error);
        }
        else{
            response.send(result);                         // response to postman and server(5000) 
        }
    })
})
// insert the data from postman to db(mysql) 
app.post("/", (request,response)=>{
    const data = request.body;                              // get the data from postman

    con.query("insert into bonus set?",data,(error,result,fields)=>{
        if(error) 
        error;
        else
        response.send(result);                               // save the data into mysql 
    })
})


app.listen(5000)