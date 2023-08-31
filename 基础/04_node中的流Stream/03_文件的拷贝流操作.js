const fs = require('fs')

// 方式一：一次性读取和写入文件
// fs.readFile('./test3.txt', (err, data) => {
// 	fs.writeFile('./test4.txt', data, (err) => {
// 		console.log('写入文件完成')
// 	})
// })

// 方式二：可写流和可读流
const readStream = fs.createReadStream('./test3.txt')
const writeStream = fs.createWriteStream('./test4.txt')
// readStream.on('data', (data) => {
// 	writeStream.write(data)
// })

// readStream.on('end', () => {
// 	writeStream.close()
// })

// 方式三：可读流和可写流之间建立管道,从可读流里读取到得数据直接输入到可写流里面
readStream.pipe(writeStream)
