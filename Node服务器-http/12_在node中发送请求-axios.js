const axios = require('axios')

// 先开始10_response响应对象-响应header.js服务

// axios底层基于http模块
axios.get('http://localhost:3000').then((res) => {
	console.log(res.data)
})
axios.post('http://localhost:3000').then((res) => {
	console.log(res.data)
})
