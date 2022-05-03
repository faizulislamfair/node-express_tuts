const express = require('express')
const app = express()
const PORT = 3000

app.get("/", (req,res)=>{
    // const id = req.query.id;
    // const name = req.query.name;

    //destructure
    const {id, name} = req.query;
    res.send(`<h1>Student id is: ${id} & and name is: ${name}</h1>`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})