const express = require('express')
const app = express()
const PORT = 3000


// Query Parameter

// app.get("/", (req,res)=>{
    // const id = req.query.id;
    // const name = req.query.name;

    //destructure
    // const {id, name} = req.query;
    // res.send(`<h1>Student id is: ${id} & and name is: ${name}</h1>`);
// })



// Route Parameter

// app.get("/userId/:id/userAge/:age", (req, res)=>{
//     const id = req.params.id;
//     const age = req.params.age;


//     res.send(`<h1>Student id is: ${id}, age is: ${age}</h1>`)
// })



// Header Request

app.get("/", (req, res) => {
    const id = req.header('id');
    const name = req.header('name');
    res.send(`<h1>Student id is: ${id}, name is: ${name}</h1>`)
});



app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})