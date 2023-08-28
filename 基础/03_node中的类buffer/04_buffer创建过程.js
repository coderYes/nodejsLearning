// 创建buffer时并不会频繁的向操作系统申请内存，而是默认先申请一个8 * 1024字节大小的内存，也就是8kb
// 后面不管alloc了多少字节的内存，都会用到8kb剩下的内存
ArrayBuffer.alloc(1)
ArrayBuffer.alloc(8)