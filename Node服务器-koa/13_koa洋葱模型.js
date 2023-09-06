const Koa = require('koa')
const app = new Koa()

app.use((ctx,next)=>{
    console.log('middleware 01'); 
    next()
    console.log('middleware 01 next');
})
app.use((ctx,next)=>{
    console.log('middleware 02');
    next()
    console.log('middleware 02 next');
})
app.use((ctx,next)=>{
    console.log('middleware 03');
})

app.listen(3000, () => {
    console.log('koa服务器启动成功');
})
// log顺序,koa的洋葱模型,中间件的执行过程由外往里再由里往外执行，并且response返回body执行
// middleware 01
// middleware 02     
// middleware 03     
// middleware 02 next
// middleware 01 next