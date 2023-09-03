const express = require('express')
const app = express()

app.post('/login', (req, res, next) => {
	// 获取本次请求中传递过来的json数据
	let isLogin = false
	req.on('data', (data) => {
		const dataString = data.toString()
		const dataInfo = JSON.parse(dataString)
		console.log(dataString)
		console.log(dataInfo)
		if (dataInfo.username === 'zgw' && dataInfo.password === '123456') {
			isLogin = true
		}
	})
	req.on('end', () => {
		if (isLogin) {
			res.end('登录成功')
		} else {
			res.end('登录失败')
		}
	})
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
