/*                os, path                */


const os = require("os");

// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());

// console.log(__dirname);
// console.log(__filename);


const path = require("path");



/*                  To find extension name                      */


// const extensionName = path.extname("index.html");

// console.log(extensionName);



/*                 To join url             */

// const joinName = path.join(__dirname + "/views")
// console.log(joinName);


const joinName = path.join(__dirname + "/../views");
console.log(joinName);