const Koa = require('koa')
const KoaRouter = require('@koa/router')
const app = new Koa()

const usersRouter = new KoaRouter({ prefix: true })

usersRouter.get('/', (ctx, next) => {

})

app.use(usersRouter.routes())


app.listen(3000, () => {
    console.log('koa服务器启动成功');
})