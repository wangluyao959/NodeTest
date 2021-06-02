const http = require('http');
const url = require('url');
const router = require('./modules/router');


http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    let pathName = url.parse(req.url).pathname.replace(/\//, '');
    try {
      console.log(pathName);
      router[pathName](req, res)
    } catch (error) {
      console.log(error);
      router['home'](req, res)
    }
  }
  // res.end();
}).listen(8000)

console.log('Server running at http://localhost:8000');