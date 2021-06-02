//http缓存---不添加缓存信息头
const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        Http Cache Demo
        <script src="/app01.js"></script>
    </body>
    </html>`)
})

app.get('/app01.js', (req, res) => {
  let jsPath = path.resolve(__dirname, '../demo02/test.js');
  let cont = fs.readFileSync(jsPath);
  res.end(cont)
})

app.listen(port, () => {
  console.log(`listen on ${port}`)
})