const Koa = require('koa')
const app = new Koa()

// express中间件有三个参数，而koa中只有两个参数
app.use((ctx, next) => {
    console.log('匹配到koa中间件');
    ctx.body = '哈哈哈'
})

app.listen(3000, () => {
    console.log('服务器启动成功');
})