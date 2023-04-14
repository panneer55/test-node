// import fs from "fs"
const fs = require("fs")

const express = require("express")
const routes = require("../src/router/index")
require('dotenv').config()

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send({
        status: true,
        message: "Hi from Type"
    })
})

app.use("/api", routes)


app.listen(port, () => {
    console.log("Server Listening on port : ", port)
})