const express = require('express')
const multer = require('multer')

const app = express()

// 应用一个express编写第三方的中间件
const upload = multer({
	dest: './uploads', // 文件存放路径
})

// upload.single()返回一个中间件，将请求传过来的文件解析，解析完之后内部调用next，将结果传给下一个中间件
// 上传单文件:singer方法
app.post('/upload', upload.single('photo'), (req, res, next) => {
	console.log(req.file) // 上传文件的信息
	res.end('文件上传成功')
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
