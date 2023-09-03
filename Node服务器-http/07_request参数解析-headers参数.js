const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req.headers);
  console.log('------------');
  console.log(req.headers['content-type']);

  res.end('hello world')
})

server.listen(3000,()=>{
  console.log('服务器开启成功');
})