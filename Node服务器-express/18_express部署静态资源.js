const express = require('express')
const app = express()

// express.static内置的中间件，将一个文件夹作为静态资源
app.use(express.static('./uploads'))

app.listen(3000, () => {
    console.log('服务器启动成功');
})