const http = require('http')

const server = http.createServer((req, res) => {
  // 方式一：statusCode
	// res.statusCode = 201

  // 方式二：setHead
  res.writeHead(401)
	res.end('hellow world')
})

server.listen(3000, () => {
	console.log('服务器开启成功')
})
