const url = require('url')
const file = require('./file')
const queryString = require('querystring');


module.exports = {
  login: (req, res) => {
    // const urlObject = url.parse(req.url,true).query;
    // console.log(urlObject.email);
    // console.log(urlObject.password);
    // file.readFile('./views/login.html',res,req)

    //post
    let post = "";
    req.on('data', (chunk)=>{
      post += chunk;
    })
    req.on('end', ()=>{
      file.postReadFile('./views/login.html',res,req,post)  
    })
  },
  register: (req, res) => {
    res.write('注册页面')
  },
  home: (req, res) => {
    file.readFile('./views/home.html', res, req);
  },
  readImg: (req, res) => {
    file.readImg('./images/pet.jpg', res)
  }
}