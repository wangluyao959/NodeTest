//http缓存---添加ETag
const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const path = require('path');
const md5 = require('md5');


app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        Http Cache Demo
        <script src="/test.js"></script>
    </body>
    </html>`)
})

app.get('/test.js', (req, res) => {
  //每一次请求文件的时候都会读取文件内容，并进行记录，用于和请求比较
  let jsPath = path.resolve(__dirname, '../demo02/test.js');
  let cont = fs.readFileSync(jsPath);
  let etag = md5(cont);

  if (req.headers['if-none-match'] === etag) {
    res.writeHead(304, 'Not Modified');
    res.end();
  } else {
    res.setHeader('ETag', etag);
    res.writeHead(200, 'OK');
    res.end(cont);
  }
})

app.listen(port, () => {
  console.log(`listen on ${port}`)
})