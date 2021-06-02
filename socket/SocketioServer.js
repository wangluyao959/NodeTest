const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');

app.get('/',(req,res)=>{
  function callback(data){
    res.send(data.toString())
  }
  fs.readFile('./socketIoClient.html',(err,data)=>{
    if(err){
      console.log(err);
      callback('文件不存在')
    }else{
      callback(data)
    }
  })
})

