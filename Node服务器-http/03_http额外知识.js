const http = require('http')
const server = http.createServer((req, res) => {
    // 被访问了两次，除了服务器还访问了favicon.ico图标
    console.log('服务器被访问');
    res.end('hello world')
})
server.listen(3000, () => {
    console.log('服务器开启成功🚀');
})