const fs = require('fs')

// 对文件夹/文件进行重命名
fs.rename('./rename', './rename2', (err) => {
	if (err) {
		console.log('文件夹重命名失败:', err)
		return
	}
	console.log('文件夹重命名成功')
})
