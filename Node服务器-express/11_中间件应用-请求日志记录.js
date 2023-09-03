const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

const app = express()

const writeStream = fs.createWriteStream('./access.log')
app.use(morgan('combined', { stream: writeStream }))

app.post('/login', (req, res, next) => {
	res.end('登录成功')
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
