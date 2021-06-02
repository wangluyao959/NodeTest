let WebSocketServer = require('ws').Server,
wss = new WebSocketServer({port:9000})

let clientMap = new Object();
let i = 0;

wss.on('connection',(ws)=>{
  console.log(ws+"上线");
  ws.name = ++i;
  clientMap[ws.name] = ws;
  ws.on('message',(message)=>{
    broadcast(message,ws);
  })
  ws.on('close',()=>{
    console.log("离开");
    //关闭连接
    global.gc();//调用内存回收
  })
})

function broadcast(message,ws){
  for (const key in clientMap) {
    clientMap[key].send(`${key}说：`+message)
   }
}