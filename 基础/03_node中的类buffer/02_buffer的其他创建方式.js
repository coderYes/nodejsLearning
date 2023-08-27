const fs = require('fs')

// 1.创建一个buffer对象
// 八个字节大小的buffer内存空间
const buf = Buffer.alloc(8)
console.log(buf) // <Buffer 00 00 00 00 00 00 00 00>

// 2.手动对每个字节进行操作
console.log(buf[0]);
buf[0] = 100
console.log(buf[0]);
console.log(buf.toString()); // d,ASCII码中100对应小写字母d