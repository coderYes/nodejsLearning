const http = require('http')

// 先开始10_response响应对象-响应header.js服务

// 使用http模块发送get请求
http.get('http://localhost:3000', (res) => {
	// 从可读流中获取数据
	res.on('data', (data) => {
    console.log('http get请求');
		console.log(JSON.parse(data.toString()))
	})
})

// 使用http模块发送post请求
const req = http.request(
	{
		method: 'POST',
		hostname: 'localhost',
		port: 3000,
	},
	(res) => {
		res.on('data', (data) => {
      console.log('http post请求');
			console.log(JSON.parse(data.toString()))
		})
	}
)
// 调用end，表示写入完成，post请求结束
req.end()
