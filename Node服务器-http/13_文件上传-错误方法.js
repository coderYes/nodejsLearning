const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	// 创建可写流
	const writeSteam = fs.createWriteStream('./foo.png', {
		flags: 'a+',
	})

	// 客户端传递的数据是表单数据（请求体）
	req.on('data', (data) => {
		console.log(data)
		writeSteam.write(data)
	})
	req.on('end', () => {
		console.log('数据传输完成')
		writeSteam.close()
		res.end('文件上传成功')
	})
})

server.listen(3000, () => {
	console.log('服务器开启成功')
})