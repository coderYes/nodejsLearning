const Koa = require('koa')
const koaRouter = require('@koa/router')
const multer = require('@koa/multer')
const app = new Koa()

const upload = multer({
    // dest: './uploads'
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './uploads')
        },
        filename(req, file, cb) {
            cb(null, Date.now() + '_' + file.originalname)
        }
    })
})

const userRouter = new koaRouter({ prefix: '/users' })

// 上传单张图片
userRouter.post('/upload', upload.single('icons'), (ctx, next) => {
    console.log(ctx.request.file);
    ctx.body = '上传成功'
})

// 上传多张图片
userRouter.post('/uploads', upload.array('photos'), (ctx, next) => {
    console.log(ctx.request.files);
    ctx.body = '上传成功'
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())



app.listen(3000, () => {
    console.log('koa服务器启动成功');
})