//http缓存---添加Catch-Control信息头
const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const path = require('path');
const moment = require('moment');


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
  let jsPath = path.resolve(__dirname, '../demo02/test.js');
  let cont = fs.readFileSync(jsPath);
  //添加头信息
  res.setHeader('Cache-Control', 'public,max-age=10') //10s
  res.end(cont)
})

app.listen(port, () => {
  console.log(`listen on ${port}`)
})