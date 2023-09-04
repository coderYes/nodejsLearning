const express = require('express')
const app = express()

app.post('/login', (req, res, next) => {
    // 1.使用res.end方法返回数据比较少
    // res.end('登录成功')

    // 2.res.json方法返回数据,可以传入object，array，string，boolean，number，null等
    // 都会被转成json格式返回
    res.json({
        code: 0,
        message: '登录成功',
        token: 'sadsadlsakjdaldjsl12s3ad123as1f'
    })

    // 3.res.status方法,用于设置http状态码
    // res.status(201)
    // res.end('登录成功')
})

app.listen(3000, () => {
    console.log('服务器启动成功');
})