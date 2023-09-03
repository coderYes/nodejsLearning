const http = require('http')

const server = http.createServer((req, res) => {
	// 获取body参数
	// request对象本质上是一个readable可读流

  req.setEncoding('utf-8') // 设置utf-8编码
	req.on('data', (data) => {
		const dataString = data // 获取到body参数
    console.log(JSON.parse(dataString));
	})
	req.on('end', () => {
		res.end('hello world')
	})
})

server.listen(3000, () => {
	console.log('服务器开启成功')
})
