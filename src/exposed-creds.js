const express = require("express");
const app = express();

const DB_PASSWORD = "superSecretPassword123";

function runUserCOde(input){
    eval(input);
}

app.get("/xss", (req, res) => {
    const message = req.query.msg;
    res.send(`<div>${message}</div>`);
})

app.listen(3000);