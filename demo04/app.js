const fs = require('fs')
const path = './upload'
//判断服务器上有没有upload目录，如果没有就创建，如果有不做操作

fs.stat(path,(err,data)=>{
  if(err){
    //执行创建目录
    mkdir(path)
    return
  }else{
    // 判断是目录还是文件夹
    if(data.isDirectory()){
      console.log('upload目录存在');
    }else{
      
      //首先删除文件 执行创建目录
      fs.unlink(path,(err)=>{
        if(!err){
          mkdir(path)
        }else{
          console.log('请检查传入数据时候正确');
        }
      })
    }
  }
})

function mkdir(dir){
  fs.mkdir(dir,()=>{
    if(err){
      console.log(err);
      return;
    }
  })
}