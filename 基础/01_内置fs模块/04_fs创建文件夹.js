const { log } = require('console')
const fs = require('fs')

// 创建文件夹 directory
fs.mkdir('./createDirectory', (err) => {
	if (err) {
		console.log('创建文件夹失败:', err)
		return
	}
  console.log('创建文件夹成功');
  fs.mkdir('./createDirectory/3.txt', (err2) => {
    if (err2) {
      console.log('创建文件夹失败:', err2)
      return
    }
    console.log('创建文件成功');
  })  
})
