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

// app.get("/", (req, res) => {
//     const id = req.header('id');
//     const name = req.header('name');
//     res.send(`<h1>Student id is: ${id}, name is: ${name}</h1>`)
// });



const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())



// Make post request with JSON data 


app.get('/register', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})


app.post("/register", (req, res)=>{
     const fullName = req.body.fullName;
     const age = req.body.age;
     res.send(`Your name is ${fullName} & age is ${age}`);
})




app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})