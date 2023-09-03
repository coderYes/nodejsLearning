const express = require('express')

// 1.创建express服务器
const app = express()

// 客户端访问url：/login和/home
// http模块是在回调中获取req.url参数进行判断来做对应的参数
app.post('/login', (req, res) => {
	// 处理login请求
	res.end('登录成功')
})
app.get('/home', (req, res) => {
	res.end('进入首页')
})

// 2.启动服务器并监听端口
app.listen(3000, () => {
	console.log('服务器启动成功')
})
