const express = require('express')
const userRouter = require('./router/userRouter')
const app = express()

// 让路由生效
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log('服务器启动成功');
})