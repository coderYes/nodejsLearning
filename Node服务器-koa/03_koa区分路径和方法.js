const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
    // 两种方式获取path，结果一样
    console.log(ctx.request.path);
    console.log(ctx.path);

    // 获取方法
    console.log(ctx.method);
})

app.listen(3000, () => {
    console.log('服务器启动成功');
})