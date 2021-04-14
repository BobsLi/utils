/**
 * 该防抖函数只需要执行一次setTimeout定时器
 * @param {function} func 回调函数，即需要防抖的执行函数
 * @param {number} wait 延迟执行函数的时间间隔
 * @param {boolean} immediate 是否立即执行
 * @returns { function } 返回客户调用的函数
 */
function debounce(func, wait = 50, immediate = true) {
  let timer, context, args

  // 延迟执行函数
  const later = () => {
    return setTimeout(() => {
      // 延迟函数执行完毕，清除定时器缓存标记
      timer = null

      // 延迟执行的情况下，函数会在延迟函数中执行
      // 使用到之前缓存的参数和上下文
      if (!immediate) {
        func.apply(context, args)
        // 执行函数后清空参数和上下文
        context = args = null
      }
    }, wait)
  }

  //这里返回的函数是每次实际调用的函数
  return function (...params) {
    // console.log(this)
    // console.log(params)
    // 如果没有创建延迟执行函数（later），就创建一个，
    // 否者如果已经创建则清除当前创建的然后重新创建
    if (!timer) {
      timer = later()
      // 如果是立即执行，调用函数
      // 否则缓存参数和调用上下文
      if (immediate) {
        func.apply(this, params)
      } else {
        context = this
        args = params
      }
    } else {
      clearTimeout(timer)
      timer = later()
    }
  }
}

/**
 * 该防抖函数可能会多次执行setTimeout定时器
 * @param {function} func 回调函数，即需要防抖的执行函数
 * @param {number} wait 延迟执行函数的时间间隔
 * @param {boolean} immediate 是否立即执行
 * @returns { function } 返回客户调用的函数
 */
function debounce2(func, wait = 50, immediate = true) {
  let timer, context, args, previous, result

  // 延迟执行函数
  const later = () => {
    const passed = +new Date - previous
    if (wait > passed) {
      timer = setTimeout(later, wait - passed);
    } else {
      timer = null
      if (!immediate) {
        result = func.apply(context, args)
      }
      if (!timer) context = args = null
    }
  }

  return function (...params) {
    context = this
    args = params
    previous = +new Date()
    if (!timer) {
      timer = setTimeout(later, wait)
      if (immediate) {
        result = func.apply(context, args)
      }
    }
    return result
  }
}