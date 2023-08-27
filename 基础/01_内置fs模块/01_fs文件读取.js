const { log } = require('console')
const fs = require('fs')
// 1.同步读取
const res = fs.readFileSync('./1.txt', {
	encoding: 'utf-8', // 使用utf-8方式解码，不设置encoding读取的内容会转为16进制
})
console.log(res)
// 2.异步读取：回调函数
fs.readFile(
	'./1.txt',
	{
		encoding: 'utf-8',
	},
	(err, data) => {
		if (err) {
			console.log('读取文件错误:', err)
			return
		}
		console.log('读取文件的结果:', data)
	}
)
// 1.异步读取：Promise
fs.promises.readFile('./1.txt', { encoding: 'utf-8' }).then(
	(res) => {
		console.log('读取文件的结果:', res)
	},
	(err) => {
		console.log('读取文件错误:', err)
	}
)
