const fs = require('fs')




/*                                    To write a file                                   */


// fs.writeFile('demo1.txt', "I'm Faizul Islam", (err) => {
//          if(err){
//              console.log(err)
//          }else{
//              console.log("successful")
//          }
// })






/*                                   To append a file                                   */


// fs.appendFile('demo1.txt', " I eat kola", (err) => {
//            if(err){
//                console.log(err)
//            }else{
//                console.log("again, successful")
//            }
// })






/*                                  To read a file                                      */


// fs.readFile('demo1.txt', 'utf-8', (err, data) => {
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }
// });






/*                                   To rename a file                                  */


// fs.rename('demo1.txt', 'demo2.txt', (err) => {
//       if(err){
//           console.log(err)
//       }else{
//           console.log("successful")
//       }
// })






/*                                   To delete a file                      */


// fs.unlink('demo2.txt', (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful")
//     }
// })






/*                            To check if a file exists or not            */


fs.exists('demo2.txt', (result) => {
    if(result) {
        console.log("found")
    }else{
        console.log("Not found")
    }
})

