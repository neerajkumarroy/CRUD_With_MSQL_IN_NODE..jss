const con = require("./config");
const express = require("express");
const app = express();
const PORT = 2000;

//get API             
app.get("/", (req, res) => {

    con.query("SELECT * FROM college", (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.send(result);
             console.log("hello");
        }
    })
})



app.delete("/:student_id", (req, res) => {
//    res.send(req.params.student_id); // Get the ID from the request parameters

    con.query("DELETE FROM college WHERE student_id ="+ req.params.student_id,(err, result) => {
        if (err) {
            res.send(err);
        }else
        {
            res.send(result);
        }
        
    });
});

app.listen(PORT);
