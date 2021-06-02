const fs = require('fs')
const queryString = require('querystring');

module.exports = {
  readFile: (file, res, req) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
      })
      res.write(data);
      res.end()
    })
  },
  postReadFile: (file, res, req,post) => {
    const urlObject = queryString.parse(post);
    let array = ['email',"password"];
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
      })

      for (let i = 0; i < array.length; i++) {
        reg = new RegExp('{'+array[i]+'}','gi')
        data = data.replace(reg,urlObject[array[i]])
      }
      res.write(data)
      res.end()
    })

  },
  readImg: (file, res) => {
    fs.readFile(file, 'binary', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'image/jpeg'
      });

      res.write(data, "binary");
      res.end();
    })
  }
};