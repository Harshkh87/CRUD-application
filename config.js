//importing mysql module
const mysql = require('mysql');

//  connection with mysql
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"org"
}) 

// check connection 
con.connect((err)=>{
    if(err)
    {
        console.log("error");
    }
    else
    {
        console.log("connected");
    }
})

module.exports=con;