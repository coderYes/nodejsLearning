const express = require('express')

// 创建路由对象
const userRouter = express.Router()
// 定义路由对象中的映射接口
userRouter.get('/list', (req, res, next) => {
    res.json([
        { name: 'aaa', id: 1 },
        { name: 'bbb', id: 2 },
        { name: 'cccc', id: 3 },
    ])
})
userRouter.get('/list/:id', (req, res, next) => {
    res.json([
        { name: 'zgw', id: 999 },
    ])
})
userRouter.post('/login', (req, res, next) => {
    res.json('登录成功')
})

module.exports = userRouter