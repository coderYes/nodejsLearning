const express = require('express')
const app = express()

// 路径匹配的中间件不会对请求方式进行限制
app.use('/home', (req, res, next) => {
	console.log('匹配/home路径的中间件')
	res.end('---------')
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
