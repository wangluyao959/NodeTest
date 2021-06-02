var http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (request, response) {


  //获取地址
  console.log(request.url);
  let parsename = request.url;
  parsename = parsename=='/' ? '/index.html' : parsename;
  //2.通过fs模块读取文件
  if (parsename !== '/favicon.ico') {
    fs.readFile('./static' + parsename, (err, data) => {
      if (err) {
        response.writeHead(404, {
          'Content-Type': 'text/html;charset= utf-8'
        });
        response.end('这个页面不存在');
        // response.write('./static/404.html')
        return
      }
      response.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
      });
      // response.write('./static/index.html')

      response.end(data);
    });
  }

}).listen(9000);

// console.log('Server running at http://127.0.0.1:9000/');