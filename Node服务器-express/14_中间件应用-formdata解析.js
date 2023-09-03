const express = require('express')
const multer = require('multer')
const app = express()

// express内置的插件不会对formdata数据解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const formdata = multer()

// 通过multer的any方法解析formdata数据
app.post('/login', formdata.any(), (req, res, next) => {
	console.log(req.body)
	res.end('login')
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
