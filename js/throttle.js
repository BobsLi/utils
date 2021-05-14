function throttle1(fn, delay = 500) {
  let timer // 定时器id
  let lastTime = Date.now() // 上次进来的时间
  return function(...args) {
    const nowTime = Date().now()
    if (nowTime - oldTime >= delay) {
      fn.apply(this, )
    }
  }
}


/**
 * 节流函数(underscore版)
 * @param {function} func 回调函数，即需要防抖的执行函数
 * @param {number} wait 延迟执行函数的时间间隔
 * @param {*} options { leading: false, 如果设置为false，则禁用首次调用； trailing: false, 如果设置为false，则禁止最后一次调用 }
 * @returns { function } 返回客户调用的函数
 */
function throttle(func, wait, options) {
  let context, args, result
  let timer = null

  // 之前的时间戳
  let previous = 0

  // 如果 options 没传则设为空对象
  const { leading, trailing } = options || {}

  // 定时器回调函数
  const later = () => {
    // 如果设置了 leading，就将 previous 设为 0
    // 否则设为 当前时间
    previous = leading === false ? 0 : +new Date()

    // 定时器置空 一是为了防止内存泄漏，二是为了下面的定时器判断
    timer = null

    result = func.apply(context, args)

    // 执行函数后清空参数和上下文
    if (!timer) {
      context = args = null
    }
  }

  return function (...params) {
    const now = +new Date()
    // 首次进入前者肯定为 true
    // 如果需要第一次不执行函数
    // 就将上次时间戳设为当前的
    // 这样在接下来计算 remaining 的值时会大于0
    if (!previous && leading === false) previous = now
    const remaining = wait - (now - previous)
    // console.log(remaining, previous, wait)
    // console.log(this)
    // console.log(arg, arguments)
    // console.log('timer', timer)
    // 缓存参数和调用上下文
    context = this
    args = params
    // 如果当前调用已经大于上次调用时间 + wait
    // 或者用户手动调了时间
    // 如果设置了 trailing，只会进入这个条件
    // 如果没有设置 leading，那么第一次会进入这个条件
    // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
    // 其实还是会进入的，因为定时器的延时
    // 并不是准确的时间，很可能你设置了2秒
    // 但是他需要2.2秒才触发，这时候就会进入这个条件
    if (remaining <= 0 || remaining > wait) {
      // 如果存在定时器就清理掉否则会调用二次回调
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      // 执行回调函数
      result = func.apply(context, params)
      // 清空上下文和参数缓存
      if (timer) context = args = null
    } else if (!timer && trailing !== false) {
      timer = setTimeout(later, remaining)
    }

    return result
  }
}