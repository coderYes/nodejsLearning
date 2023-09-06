const axios = require('axios')


// express执行异步代码
const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('express middleware01');
    req.msg = 'aaa'
    next()
    // res.json(req.msg)
})
app.use((req, res, next) => {
    console.log('express middleware02');
    req.msg += 'bbb'
    next()
})
app.use(async (req, res, next) => {
    console.log('express middleware03');
    // express中next加不加await没有意义，做不到异步请求结束后拿到结果
    const resData = await axios.get('http://123.207.32.32:8000/home/multidata')
    req.msg += resData.data.data.banner.list[0].title
    
    // 只能在最后返回结果，不能回到前面返回结果
    res.json(req.msg)

})
app.listen(3000, () => {
    console.log('服务器启动成功');
})

// koa执行异步代码
const Koa = require('koa')
const app2 = new Koa()
app2.use(async (ctx, next) => {
    console.log('koa middleware01');
    ctx.msg = 'aaa'
    await next()

    // next后面返回结果,并不会先执行下面操作，而是依次往下执行操作，最后回到这里执行下面代码
    ctx.body = ctx.msg
})

app2.use(async (ctx, next) => {
    console.log('koa middleware02');
    ctx.msg += 'bbb'
    await next()
})

app2.use(async (ctx, next) => {
    console.log('koa middleware03');
    // 如果执行的下一个中间件是一个异步函数，那么next不会等到中间件的结果，就执行下一步操作
    // 解决办法就是给next加上async await
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')

    ctx.msg += res.data.data.banner.list[0].title
})
app2.listen(3001, () => {
    console.log('koa服务器启动成功');
})