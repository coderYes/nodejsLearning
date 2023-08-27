// 在node中buffer是用来存储二进制数据的
// buffer看成是一个存储二进制的数组，数组中的每一项可以保存8位二进制 0000 0000
// 8位合在一起作为一个单元，也称为一个字节（byte）
// 1byte = 8kit，1kb = 1024byte，1M = 1024kb

// 1.创建buffer
const buf = new Buffer('hello')
console.log(buf) // <Buffer 68 65 6c 6c 6f>

// 2.创建buffer2
const buf2 = Buffer.from('world')
console.log(buf2) // <Buffer 77 6f 72 6c 64>

// 3.创建buffer（字符串中包含中文）,一个中文需要三个字节表示
const buf3 = Buffer.from('你好')
console.log(buf3) // <Buffer e4 bd a0 e5 a5 bd>
console.log(buf3.toString()) // 你好,转化回中文使用toString方法

// 4.手动指定Buffer创建过程的编码
// 编码操作
const buf4 = Buffer.from('哈哈哈','utf16le')
console.log(buf4);// <Buffer c8 54 c8 54 c8 54>,utf16le使用两个字节表示
// 解码操作
console.log(buf4.toString('utf16le')); // 哈哈哈,什么编码格式就什么解码格式
