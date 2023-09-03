const http = require('http')
const server = http.createServer((req, res) => {
    // request对象中包含的信息
    console.log(req.url); // url信息
    console.log(req.method); // method请求方式
    console.log(req.headers); // headers请求头

    if(req.url === '/login'){
        res.end('登录成功')
    }
})
server.listen(3000, () => {
    console.log('服务器开启成功');
})