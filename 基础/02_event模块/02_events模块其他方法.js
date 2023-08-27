const EventEmitter = require('events')
const emitter = new EventEmitter()

function emitterFn() {
	console.log('监听到事件')
}
function emitterFn2() {
	console.log('监听到prependListener事件')
}
// emitter.eventNames(),返回当前EventEmitter对象注册的事件字符串数组
emitter.on('aaa', emitterFn)
emitter.on('aaa', emitterFn)
emitter.on('bbb', emitterFn)
emitter.on('ccc', emitterFn)
console.log(emitter.eventNames())

// emitter.getMaxListeners(),返回当前EventEmitter对象的最大监听器数量,可以通过setMaxListeners()来修改
console.log(emitter.getMaxListeners())
emitter.setMaxListeners(100)
console.log(emitter.getMaxListeners())

// emitter.listenerCount(事件名称),返回当前EventEmitter对象某一事件名称监听器的个数
console.log(emitter.listenerCount('aaa'))

// emitter.listeners(事件名称),返回当前EventEmitter对象某个事件监听器上所有的监听器的数组
console.log(emitter.listeners('aaa'))

// emitter.once,事件监听一次
emitter.once('ddd', emitterFn)

// emitter.prependListener(),监听事件添加到最前面
emitter.prependListener('ddd', emitterFn2)

emitter.emit('ddd')
emitter.emit('ddd')

// emitter.removeAllListeners(),移除所有监听事件
// 不传递参数移除所有事件监听，传递参数只移除传递的事件监听
console.log('--------------------');
emitter.removeAllListeners('bbb')
emitter.emit('bbb')
