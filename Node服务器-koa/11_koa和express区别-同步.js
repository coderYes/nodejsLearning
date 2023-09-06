// koa和express执行同步代码一样


// express执行同步代码
const express = require('express')
const app = express()
app.use((req, res, next) => {
    console.log('express middleware01');
    req.msg = 'aaa'
    next()

    res.json(req.msg)
})
app.use((req, res, next) => {
    console.log('express middleware02');
    req.msg += 'bbb'
    next()
})
app.use((req, res, next) => {
    console.log('express middleware03');
    req.msg += 'ccc'
})
app.listen(3000, () => {
    console.log('服务器启动成功');
})

// koa执行同步代码
const Koa = require('koa')
const app2 = new Koa()
app2.use((ctx, next) => {
    console.log('koa middleware01');
    ctx.msg = 'aaa'
    next()

    // next后面返回结果,并不会先执行下面操作，而是依次往下执行操作，最后回到这里执行下面代码
    ctx.body = ctx.msg
})

app2.use((ctx, next) => {
    console.log('koa middleware02');
    ctx.msg += 'bbb'
    next()
})

app2.use((ctx, next) => {
    console.log('koa middleware03');
    ctx.msg += 'ccc'
})

app2.listen(3001, () => {
    console.log('koa服务器启动成功');
})