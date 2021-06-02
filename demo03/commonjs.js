var http = require('http');
const tools = require('./module/tools');


http.createServer(function (request, response) {
  console.log('request.url :>> ', request.url);
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  if (request.url !== '/favicon.ico') {

    let url = tools.formateApi('api/getList');
    console.log('url :>> ', url);
    response.write("<br/>"+url)
    
  }

  response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');