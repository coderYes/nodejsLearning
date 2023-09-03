const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
	// 参数一：query类型参数
	// 1.解析url
	const urlString = req.url
	const urlInfo = url.parse(urlString)
	console.log(urlInfo.pathname)

	// 2.解析query
	const queryString = urlInfo.query
	const queryInfo = qs.parse(queryString)
	console.log(queryInfo)
})
server.listen(3000, () => {
	console.log('服务器开启成功')
})
