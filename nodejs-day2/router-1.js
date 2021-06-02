const http = require('http');
const url = require('url');
const router = require('./modules/router');


http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  })
  if (req.url !== '/favicon.ico') {
    let pathName = url.parse(req.url).pathname.replace(/\//, '');
    try {
      pathName?router[pathName](req, res):router['login'](req, res)
      // router[pathName](req, res)
    } catch (error) {
      // res.write('错误页面')
      router['home'](req, res)
    }
  }
  res.end();
}).listen(8000)

console.log('Server running at http://localhost:8000');