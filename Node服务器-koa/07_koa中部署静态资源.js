const Koa = require('koa')
const static = require('koa-static')

const app = new Koa()
app.use(static('./uploads'))

app.listen(3000, () => {
    console.log('koa服务器开启成功');
})