// events模块中的事件总线
const EventEmitter = require('events')

// 创建EventEmitter实例
const emitter = new EventEmitter()

// 监听/发射/取消监听事件
emitter.on('zgw', emitterFn)

setTimeout(() => {
	emitter.emit('zgw', '玉面小郎君', 18, 1.88)

	// 取消监听事件
	emitter.off('zgw', emitterFn)

	setTimeout(() => {
		emitter.emit('zgw', '玉面小郎君', 18, 1.88)
	}, 1000)
}, 2000)

function emitterFn(...ages) {
	console.log('监听到zgw的事件', ages)
}
