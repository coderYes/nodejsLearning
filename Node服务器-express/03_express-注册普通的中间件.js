const express = require('express')
const app = express()

// 通过use方法注册的中间件是最普通的中间件
// 通过use注册的中间件，无论什么请求都可以匹配上
// 当exporess收到客户端发送的网络请求时，在所有中间件中开始匹配

app.use((req, res, next) => {
	console.log('normal middleware 01')
	next()
})
app.use((req, res, next) => {
	console.log('normal middleware 02')
	res.end('请求结束~')
})
app.listen(3000, () => {
	console.log('服务器启动成功')
})
