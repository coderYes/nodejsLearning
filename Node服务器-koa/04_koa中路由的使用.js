const Koa = require('koa')
const KoaRouter = require('@koa/router')
const app = new Koa()

// 创建koa路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

// 路由中注册中间件
userRouter.get('/list', (ctx, next) => {
    ctx.body = [
        { name: 'aaa', id: 1 },
        { name: 'bbb', id: 2 },
        { name: 'ccc', id: 3 },
    ]
})
userRouter.get('/list/:id', (ctx, next) => {
    ctx.body = [
        { name: 'aaa', id: 1 },
    ]
})
userRouter.post('/login', (ctx, next) => {
    ctx.body = '登录成功'
})

// 让路由中的中间件生效
app.use(userRouter.routes())
// 没有封装过的请求返回Method Not Allowed
app.use(userRouter.allowedMethods())



app.listen(3000, () => {
    console.log('koa服务器启动成功');
})