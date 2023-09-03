const http = require('http')

const server = http.createServer((req, res) => {
	// response对象 => writable可写流
	res.write('hello world') // 写出数据但是没有关闭流
	res.write('hhhhhhhh')
	res.end('写出结束') // 写出最后数据并关闭流
})

server.listen(3000, () => {
	console.log('服务器开启成功')
})
