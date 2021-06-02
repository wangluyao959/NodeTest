const fs = require('fs')

const readStream = fs.createReadStream('./data/book.txt');

let count =0;
let str = '';
readStream.on('data',(data)=>{
  str+=data;
  count++
})
readStream.on('end',()=>{
  console.log(str);
  console.log(count);
})
readStream.on('error',(error)=>{
  console.log(error);
})