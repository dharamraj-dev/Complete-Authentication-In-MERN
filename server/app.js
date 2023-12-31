const express = require('express');
const app = express();
const cors = require("cors")
const router = require('./routes/router')
require("./db/conn.js")
require("./models/userSchema.js")

const port = 8009;

// app.get("/", (req, res)=>{
//     res.status(201).json("Server Created")
// });

app.use(express.json());
app.use(cors())
app.use(router);

app.listen(port, ()=>{
    console.log(`Server is start on port ${port}`)
})
