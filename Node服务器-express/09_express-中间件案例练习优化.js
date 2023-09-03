const express = require('express')
const app = express()

// 1.自己解析参数
// app.use((req, res, next) => {
// 	if (req.headers['content-type'] === 'application/json') {
// 		req.on('data', (data) => {
// 			const jsonInfo = JSON.parse(data.toString())
// 			req.body = jsonInfo
// 		})
// 		req.on('end', () => {
// 			next()
// 		})
// 	} else {
// 		next()
// 	}
// })

// 2.或者使用express提供的中间件
app.use(express.json())

app.post('/login', (req, res, next) => {
	if (req.body.username === 'zgw' && req.body.password === '123456') {
		res.end('登录成功')
	} else {
		res.end('登录失败')
	}
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
