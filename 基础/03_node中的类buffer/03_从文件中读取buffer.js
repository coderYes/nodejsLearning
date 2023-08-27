const fs = require('fs')

// 1.从文件中读取buffer
fs.readFile('./1.txt', (err, data) => {
	// 如果readFile设置编码格式，就会按照编码格式解码buffer
	console.log(data) // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>，读取到的内容就是buffer格式
	console.log(data.toString())
	data[0] = 0x64
	console.log(data.toString())
})

// 2.读取图片buffer
fs.readFile('./1.jpg', (err, data) => {
  // <Buffer ff d8 ff e0 00 10 4a ... 1061055 more bytes>
	console.log(data) 
})
