const express = require('express')
const app = express()

// app.get(路径，中间件1，中间件2....)
// 下一个中间件运行取决于上一个中间件是否执行next
app.get(
	'/home',
	(req, res, next) => {
		console.log('middleware1')
		next()
	},
	(req, res, next) => {
		console.log('middleware2')
		next()
	},
	(req, res, next) => {
		console.log('middleware3')
		res.end('end')
	}
)

app.listen(3000, () => {
	console.log('服务器启动成功')
})
