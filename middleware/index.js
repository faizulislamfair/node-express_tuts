const express = require('express')
const app = express()
const PORT = 3000


const myMiddleWare = (req, res, next) => {
    console.log('Middleware Function');

    req.currentTime = new Date(Date.now());
    next();
}



app.use(myMiddleWare);


app.use((req, res, next)=>{
    res.send("404 not found");
})


app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
})


app.get("/", (req, res)=>{
    console.log("This is home. "+req.currentTime);
    res.send('<h1>This is home route</h1>');
})



app.get("/about", (req, res)=>{
    console.log("This is about. "+req.currentTime);
    res.send('<h1>This is about route</h1>');
})



app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})