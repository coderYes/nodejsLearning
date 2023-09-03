const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	req.setEncoding('binary') // 编码设置为二进制格式

	const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '')
	console.log(boundary, 'boundary++++')

	let formData = ''
	req.on('data', (data) => {
		formData += data
		console.log(data)
	})
	req.on('end', () => {
		console.log(formData)
		// 1.截图从image/jpeg位置开始后面所有的数据
		const imageType = 'image/jpeg'
		const imageTypePosition = formData.indexOf(imageType) + imageType.length
		let imageData = formData.substring(imageTypePosition)

		// 2.imageData去掉空格
		imageData = imageData.replace(/^\s\s*/, '')

		// 3.替换最后的boundary
		imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

		// 4.将imageData数据存储到文件中
		fs.writeFile('./foo.png', imageData, 'binary', () => {
			console.log('文件存储成功')
			res.end('文件上传成功')
		})
	})
})

server.listen(3000, () => {
	console.log('服务器开启成功')
})
