/**
 * 准确判断数据类型
 * @param {*} value 需要判断数据类型的值
 * @return {*} 返回数据类型字符串全小写 
 */
function getJsType(value) {
  const type = typeof value
  // 先进行typeof判断
  // 如果是基础数据类型，直接返回
  if (type !== 'object') {
    return type
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1').toLowerCase()
}

console.log('null', getJsType(null))
console.log('string', getJsType('123'))
console.log('number', getJsType(123))
console.log('undefined', getJsType(undefined))
console.log('Boolean', getJsType(false))
console.log('Symbol', getJsType(Symbol(123)))
console.log('bigint', getJsType(1234n))
console.log('array', getJsType([]))
console.log('object', getJsType({}))
console.log('Function', getJsType(() => {}))