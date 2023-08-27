const fs = require('fs')

// 读取文件夹,获取文件夹中文件的名字
// fs.readdir('./createDirectory', (err, file) => {
// 	if (err) {
// 		console.log('读取文件夹内容失败:', err)
// 		return
// 	}
// 	console.log('读取文件夹内容成功:', file)
// })

// 读取文件夹,获取文件夹中文件的信息
// fs.readdir('./createDirectory', { withFileTypes: true }, (err, file) => {
// 	if (err) {
// 		console.log('读取文件夹内容失败:', err)
// 		return
// 	}
// 	// [ Dirent { name: '3.txt', [Symbol(type)]: 2 } ] 1表示文件，2表示文件夹
// 	file.forEach((item) => {
// 		if (item.isDirectory()) {
// 			console.log('是一个文件夹:', item.name)
// 		} else {
// 			console.log('是一个文件:', item.name)
// 		}
// 	})
// })

function readDirectory(path) {
	fs.readdir(path, { withFileTypes: true }, (err, files) => {
		if (err) {
			console.log('读取文件夹内容失败-------', err)
			return
		}
		files.forEach((item) => {
			if (item.isDirectory()) {
				readDirectory(`${path}/${item.name}`)
			} else {
				console.log('获取到文件-------', item.name)
			}
		})
	})
}
readDirectory('./createDirectory')
