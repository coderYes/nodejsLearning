const express = require('express')
const app = express()

// 注册中间件，对method和path都有限制
app.get('/home', (req, res, next) => {
	res.end('home')
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
