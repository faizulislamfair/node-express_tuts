const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => {
   
     res.end("ei message ta just browser e show korbe");

});

myServer.listen(port, ()=>{
   console.log(`ei message ta just terminal e show korbe at http://${hostname}:${port}`);
});