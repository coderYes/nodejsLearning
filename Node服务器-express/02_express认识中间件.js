// express是一个路由和中间件的web框架，本身功能较少
// express应用程序本质上是一系列中间件函数的调用

// 中间件的本质是传递给express的一个回调函数
// 这个回调函数接收三个参数：request请求对象，resposne响应对象，next函数（在express中定义的用于执行下一个中间件的函数）

const express = require('express')
const app = express()
// 给express创建的app传入一个回调函数，这个回调函数就是中间件
// app.post('/login',回调函数 => 中间件})
app.post('/login', (req, res, next) => {
  // 中间件中可以执行任何代码，打印，查询数据，判断逻辑，修改请求/响应对象，结束响应周期等等
})

app.listen(3000, () => {
	console.log('服务器启动成功')
})
