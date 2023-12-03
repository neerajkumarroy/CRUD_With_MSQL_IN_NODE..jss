const con = require("./config");
const express = require("express");
const app = express();
const PORT = 4000;

//get API
app.get("/", (req,res) => {  

    con.query("SELECT * FROM college", (err,result) => {

        if(err){
            res.send(err);
        }else
        {
            res.send(result);
            // console.log("hello");
        }
    })
})

//post API
app.post("/", (req, res) => {
    const data = {student_id:5, s_name: "Ranjeet", phone_no: 879867568, address: "Agra" };
    const data1 = {student_id:7, s_name: "Ranjeet", phone_no: 879867568, address: "Agra" };

    con.query("INSERT INTO college SET ?", data2, (err, result, fields) => {
        if (err) {
            res.send(err);
        }else
        {
            res.send(result); 
        }
        res.send(result);
    })
})

// //put API = update API
// app.put("/", (req, res) => {
//     const data = ["aayushman", '3423434323', "doon", '7'];

// con.query("UPDATE college SET s_name = ?,  phone_no, address = ? where id = ?",data, (err,result,fields => {
//     if(err) 
//     {
//         res.send(err);
//     }else{
//         res.send(result);
//     }
// }))





















































    
// });


app.listen(PORT);
                       