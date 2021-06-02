const fs = require('fs')
/**管道流*/


//首先创建一个读取流
const readStream = fs.createReadStream('../专利与资质01.png');
//再创建一个写入流
const writeStream = fs.createWriteStream('./data/new.png');


readStream.pipe(writeStream)
