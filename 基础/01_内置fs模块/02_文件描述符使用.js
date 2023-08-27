const fs = require('fs')

// 打开一个文件
fs.open('./1.txt', (err, fd) => {
	if (err) {
		console.log('文件打开错误:', err)
		return
	}
	// 1.拿到文件描述符根据描述符读取文件
	console.log('文件描述符:', fd)
	// 2.读取文件的信息
	fs.fstat(fd, (err, stats) => {
		if (err) {
			console.log('读取文件信息错误:', err)
			return
		}
		console.log('读取文件信息成功:', stats)

		// 3.手动关闭文件
		fs.close(fd)
	})
})
