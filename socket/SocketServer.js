const net = require('net')


const chatServer = net.createServer(),
  clientMap = new Object();

let i = 0; //连接名称流水号

//开启连接
chatServer.on('connection', (client) => {
  console.log("客户端有人连接~");
  client.name = ++i;
  clientMap[client.name] = client;

  //对客户端发送消息的监听

  client.on('data', (data) => {
    console.log("客户端传来" + data);
    //自定义广播消息
    broadcast(data, client);
  })

  //数据错误时间处理
  client.on('error', (err) => {
    console.log(`client err========》${err}`);
    client.end();
  })

  //客户端关闭
  client.on('close', (data) => {
    delete clientMap[client.name]
    console.log(`${client.name}下线了`);
    broadcast(`${client.name}下线了`, client);
  })

})

//定义端口号
chatServer.listen(9000)


let broadcast = (message, client) => {
  for (const key in clientMap) {
    clientMap[key].write(`${client.name}say:${message}\n`)
  }
}