const http = require('http')

// 创建第一个服务器
const server1 = http.createServer((req, res) => {
    res.end('3000端口返回结果')
})
server1.listen(3000, () => {
    console.log('3000端口服务器启动成功');
})

// 创建第二个服务器
const server2 = http.createServer((req, res) => {
    res.end('3001端口返回结果')
})
server2.listen(3001, () => {
    console.log('3001端口服务器启动成功');
})

// 创建第三个服务器，底层创建
const server3 = new http.Server((req, res) => {
    res.end('3002端口返回结果')
})
server3.listen(3002, () => {
    console.log('3002端口服务器启动成功');
})
