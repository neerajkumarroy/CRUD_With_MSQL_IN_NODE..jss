const con = require("./config");
const express = require("express");

const app = express();
const PORT = 7000;

app.get("/", (req, res) => {  // get AP

    con.query("SELECT * FROM college", (err,result) => {

        if(err){

            res.send("error");
        }
        else{
           res.send(result);
        }
    })

    // console.log("Welcome to the home page");
});

app.listen(PORT);