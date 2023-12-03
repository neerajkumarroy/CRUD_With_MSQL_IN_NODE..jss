const con = require("./config");
const express = require("express");
const app = express();
const PORT = 9000;

app.get("/", (req, res) => {

    con.query("SELECT * FROM college", (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.send(result);

        }
    })
})

//put API = update API
app.put("/", (req, res) => {
    const data1 = ["aayushman", 3423434323, "FRI", 7];

    const sql = "UPDATE college SET s_name = ?, phone_no = ?, address = ? WHERE id = ?";
    con.query(sql, data1, (err, result, fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

