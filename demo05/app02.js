const fs = require('fs')
let str = '';
for (let index = 0; index <500; index++) {
  str+='我是从数据库获取的数据\n'
  
}

const writeStream = fs.createWriteStream('./data/write.txt');
writeStream.write(str)

//标记写入完成
writeStream.end();
writeStream.on('finish',()=>{

  console.log("写入完成");
})