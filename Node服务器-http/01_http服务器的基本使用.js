const http = require('http')

// 创建一个http对应的服务器
const server = http.createServer((request,response)=>{
    // request对象中包含本次客户端请求的所有信息
    // response对象用于给客户端返回结果
    response.end('hello world')
})

// 开启对应的服务器，并告知服务器监听的端口
// 1025~65535 2字节 => 255*255 => 65536
server.listen(9090,()=>{
    console.log('服务器开启成功');
})