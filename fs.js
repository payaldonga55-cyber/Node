const { error } = require('console');
const fs=require('fs')
console.log("Hello1");
console.log("Hello12");
// const data=fs.readFileSync('demo.txt','utf-8')
// console.log(data);
const data=fs.readFile('demo.txt','utf-8',(error,data)=>
{
    if(error)throw error
    console.log(data);
})

// fs.unlinkSync('demo.txt')
console.log("Hello123");
console.log("Hello1234");

