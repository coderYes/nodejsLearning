const http = require('http')
const server = http.createServer((req, res) => {
	// 设置header信息：数据的类型和数据的编码格式
	// 1.单独设置某一header
	// res.setHeader('Content-Type', 'application/json;charset=utf-8')

	// 2.和http status code一起设置
	res.writeHead(200, {
		'Content-Type': 'application/json;charset=utf-8',
	})

	const list = [
		{ name: 'aaa', age: 18 },
		{ name: 'aaa', age: 18 },
		{ name: 'aaa', age: 18 },
	]

	res.end(JSON.stringify(list))
})

server.listen(3000, () => {
	console.log('服务器开启成功')
})
