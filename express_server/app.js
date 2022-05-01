const express = require('express')
const app = express()
const userRouter = require('./routes/users.route')

app.use("/api/user", userRouter);


app.use("/", (req, res)=>{
    res.send('<h1>This is a get request at home route</h1>');
})

// error route er jonno
app.use((req, res)=>{
    res.send("<h1>404 Error: Page Not Found</h1>")
})


module.exports = app;

