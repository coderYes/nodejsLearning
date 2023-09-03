const express = require('express')
const app = express()

// 解析客户端传来的json格式参数
// app.use(express.json())

// 解析客户端传来的urlencoded格式参数
// 解析传递过来的urlencoded时默认使用node内置querystring模块
// 调用express.urlencoded()的时候传入扩展，设为true
// { extended: true }使用第三方库qs而不是内置的querystring了
app.use(express.urlencoded({ extended: true })) 

app.post('/login', (req, res, next) => {
	console.log(req.body)
	res.end('登录成功')
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
