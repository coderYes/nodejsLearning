const Koa = require('koa')
const KoaRouter = require('@koa/router')
const fs = require('fs')
const app = new Koa()

const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/', (ctx, next) => {
    // 1.body是string类型
    // ctx.body = 'resule'

    // 2.body是buffer类型
    // ctx.body = Buffer.from('hello world')

    // 3.body是stream类型
    // const readStream = fs.createReadStream('./test.txt')
    // ctx.body = readStream

    // 4.body是数据类型(array,object)
    // ctx.body = {
    //     code: 0,
    //     data: [1, 2, 3]
    // }

    // 4.body是null
    ctx.body = null
})

app.use(userRouter.routes())


app.listen(3000, () => {
    console.log('koa服务器启动成功');
})