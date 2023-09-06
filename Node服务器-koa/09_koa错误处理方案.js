const Koa = require('koa')
const KoaRouter = require('@koa/router')
const app = new Koa()

const usersRouter = new KoaRouter({ prefix: '/users' })

usersRouter.get('/', (ctx, next) => {
    // 错误处理1
    // ctx.body = {
    //     code: -1003,
    //     message: '未授权的token'
    // }

    // 错误处理2
    ctx.app.emit('error', -1001, ctx)
})

app.use(usersRouter.routes())

// 监听emit事件
app.on('error', (code, ctx) => {
    const errCode = code
    let message = ''
    switch (errCode) {
        case -1001:
            message = '账号或密码错误'
            break
        case -1002:
            message = '请求参数不正确'
            break
        case -1003:
            message = '未授权，请检查你的token信息'
            break
    }
    const body = {
        code: errCode,
        message
    }
    ctx.body = body
})


app.listen(3000, () => {
    console.log('koa服务器启动成功');
})