const Koa = require('koa')
const KoaRouter = require('@koa/router')
const bodyparser = require('koa-bodyparser')
const multer = require('@koa/multer')
const app = new Koa()

// 使用第三方中间件解析body数据
app.use(bodyparser())
const formParser = multer()

const userRouter = new KoaRouter({ prefix: '/users' })

/**
 * 参数格式
 * 1.get：params, /:id
 * 2.get: query ?name=123
 * 3.post: json {"name":"aaa"}
 * 4.post: x-www-urlencoded 
 * 5.post: form-data
 */

// params
userRouter.get('/:id', (ctx, next) => {
    console.log(ctx.params.id);
    ctx.body = 'end'
})

// query
userRouter.get('/', (ctx, next) => {
    console.log(ctx.query);
    ctx.body = 'end'
})

// json,获取body数据需要用到第三方库koa-bodyparser
userRouter.post('/json', (ctx, next) => {
    // 不能从ctx.body中获取数据
    console.log(ctx.request.body);
    ctx.body = 'end'
})

// x-www-urlencoded，koa-bodyparser可以解析json也可以解析x-www-urlencoded数据
userRouter.post('/urlencoded', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = 'end'
})

// form-data，需要用到第三方库@koa/multer multer
userRouter.post('/formdata', formParser.any(), (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = 'end'
})

app.use(userRouter.routes())

app.listen(3000, () => {
    console.log('koa服务器启动成功');
})