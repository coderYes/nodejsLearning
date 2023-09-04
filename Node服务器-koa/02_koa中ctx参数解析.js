const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
    // ctx：上下文对象
    console.log(ctx);

    // ctx.request:koa封装的请求对象
    console.log(ctx.request);

    // ctx.req:node封装的请求对象
    console.log(ctx.req);

    // ctx.response:koa封装的响应对象
    console.log(ctx.response);

    // ctx.res:node封装的响应对象
    console.log(ctx.res);

    ctx.body('end...')
})

app.listen(3000, () => {
    console.log('服务器启动成功');
})