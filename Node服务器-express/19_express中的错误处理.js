const express = require('express')
const app = express()


app.use(express.json())
app.post('/login', (req, res, next) => {
    const { username, password } = req.body

    // 对参数进行判断
    if (!username || !password) {
        next(-1001)
    } else if (username !== 'zgw' || password !== '123456') {
        next(-1002)
    } else {
        res.json({
            code: 0,
            message: '登录成功',
            token: 'sdasd45s3ad453as4d3asd4'
        })
    }
})

// 错误处理的中间件
app.use((err, req, res, next) => {
    console.log(err);
    const code = err
    let message = "未知的错误信息"
    switch (code) {
        case -1001:
            message = "没有输入用户名或密码"
            break
        case -1002:
            message = "用户名或密码错误"
            break

    }
    res.json({
        code,
        message,
    })
})

app.listen(3000, () => {
    console.log('服务器启动成功');
})