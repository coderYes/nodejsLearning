const fs = require('fs')

// 一次性读取
// 1.无法控制从哪里读取，读取到什么位置
// 2.无法在读取到某一位置暂停读取，恢复读取
// 3.文件非常大的时候无法多次读取
fs.readFile('./test.txt', (err, data) => {
	// console.log(data)
})

// 通过流读取文件
const readStream = fs.createReadStream('./test.txt', {
	start: 8, // 从什么位置开始读取
	end: 20, // 读取到什么位置结束
	highWaterMark: 3, // 每次读取几个字节
})

// 监听读取到的事件
readStream.on('data', (data) => {
	// console.log(data)
	console.log(data.toString())
	readStream.pause() // 暂停读取文件
	setTimeout(() => {
		readStream.resume() // 继续读取文件
	}, 500)
})

// 其他监听事件
readStream.on('open', (fd) => {
	console.log('通过流将文件打开', fd)
})
readStream.on('end', () => {
	console.log('读取到end位置')
})
readStream.on('close', () => {
	console.log('文件读取结束，并且被关闭')
})
