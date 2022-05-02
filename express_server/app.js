const express = require('express')
const app = express()
const userRouter = require('./routes/users.route')

app.use("/api/user", userRouter);


app.use('/register', (req, res) => {
     res.statusCode = 200;
     res.sendFile(__dirname+"/views/register.html");
})

app.use('/login', (req, res) => {
    // res.cookie("name", "Faizul");
    // res.cookie("age", "22");
    res.clearCookie("name");
    res.append("id", "155");
    res.end();
})


app.use("/", (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html");
})

// error route er jonno
app.use((req, res)=>{
    res.send("<h1>404 Error: Page Not Found</h1>")
})


module.exports = app;

