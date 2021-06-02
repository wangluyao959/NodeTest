const net = require('net')

let port = 9000;

const host = '127.0.0.1';

const client = new net.Socket();

client.setEncoding = 'UTF-8';

//连接服务器
client.connect(port,host,()=>{
  client.write('你好')
})

client.on('data',(data)=>{
 console.log(`服务端传来${data}`);
 say();
})
//客户端错误处理
client.on('error',(err)=>{
  console.log("出错"+err);
})
//客户端错误处理
client.on('close',()=>{
  console.log("连接关闭");
})



const readLine = require('readline');
const r1 = readLine.createInterface({
  input:process.stdin,
  output:process.stdout
})
function say(){
  r1.question('请输入...',(inputString)=>{
      if(inputString!=='bye'){
        client.write(inputString+'\n')
      }else{
        client.destroy();//关闭连接
        r1.close()
      }
  })
}








