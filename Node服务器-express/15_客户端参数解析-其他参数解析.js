const express = require('express')
const app = express()

// 解析querystring参数
app.get('/home', (req, res, next) => {
    console.log(req.query);
    res.end('home')
})

// 解析params参数
app.get('/id/:id', (req, res, next) => {
    console.log(req.params.id);
    res.end('id')
})

app.listen(3000, () => {
    console.log('服务器启动成功');
})