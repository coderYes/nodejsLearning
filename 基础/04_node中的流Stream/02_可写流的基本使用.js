const fs = require('fs')

// 一次性写入
// fs.writeFile(
// 	'./test2.txt',
// 	'hello world',
// 	{
// 		encoding: 'utf-8',
// 	},
// 	(err) => {
// 		console.log('写入文件结果:', err)
// 	}
// )

// 创建写入流
const writeStream = fs.createWriteStream('./test2.txt', {
	flags: 'a+',
	start: 5,
})

writeStream.on('open', () => {
	console.log('文件被打开')
})

writeStream.write('纯情小男人')
writeStream.write('纯情中男人')
writeStream.write('纯情老男人', (err) => {
	console.log('写入成功:', err)
})

writeStream.on('close', () => {
	console.log('文件被关闭')
})

writeStream.on('finish', () => {
	console.log('写入完成了')
})

// 写入完成时手动调用close方法
// writeStream.close()

// end方法：将最后的内容写入文件，并关闭文件
writeStream.end('end')
