const express = require('express')
const app = express()


app.use((req, res, next) => {
	console.log('middleware01')
	next()
})
app.use((req, res, next) => {
	console.log('middleware02')
	next()
})
app.get(
	'/home',
	(req, res, next) => {
		console.log('/home get middleware01')
    next()
	},
	(req, res, next) => {
		console.log('/home get middleware02')
    next()
	}
)
app.post(
	'/home',
	(req, res, next) => {
		console.log('/home get middleware01')
	},
	(req, res, next) => {
		console.log('/home get middleware02')
	}
)
app.use((req, res, next) => {
	console.log('middleware03')
	next()
})
app.use((req, res, next) => {
	console.log('middleware04')
	next()
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
