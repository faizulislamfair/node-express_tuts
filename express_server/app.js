const express = require('express')
const app = express()



app.get("/", (req, res)=>{
    res.send('This is a get request at home route');
})

app.get("/about", (req, res)=>{
    res.send('This is a get request at about route');
})

app.post("/", (req, res)=>{
    res.send('This is a post request at home route');
})

app.put("/", (req, res)=>{
    res.send('This is a put request at home route');
})

app.delete("/", (req, res)=>{
    res.send('This is a delete request at home route');
})


module.exports = app;

