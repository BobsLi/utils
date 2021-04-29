/**
 * bind实现
 * 步骤
 * 1.修改this指向
 * 2.动态传递参数
 * 3.兼容new关键字
 */

 Function.prototype.mybind = function (context, ...inArgs) {
  console.log(context)
  console.log('里面的参数', inArgs)
  if (typeof this !== 'function') {
    throw new TypeError("Error");
  }

  const fn = this

  return function callback(...outArgs) {
    console.log('外面的参数', outArgs)
    console.log('callback', callback)
    console.log('callback', this instanceof callback)
    return fn.apply(context, [...inArgs, ...outArgs])
  }
}

Function.prototype.mybind1 = function (context, ...inArgs) {
  console.log(context)
  console.log('里面的参数', inArgs)
  if (typeof this !== 'function') {
    throw new TypeError("Error");
  }

  const fn = this

  return function callback(...outArgs) {
    console.log('外面的参数', outArgs)
    console.log('callback', callback)
    console.log('callback', this instanceof callback)
    return fn.apply(this instanceof callback ? new fn(outArgs) : context, [...inArgs, ...outArgs])
  }
}



function a() {
  this.name = 'boblee'
  this.getName = function (newName) {
    console.log('this', this instanceof b)
    console.log('getName', newName || this.name)
  }
}
function b() {
  this.name = 'joyce'
  this.getName = function (newName) {
    console.log('getName', newName || this.name)
  }
}

const objA = new a()
const objB = new b()
objA.getName()

// objA.getName.call(objB)

objA.getName.bind(objB)()
// objA.getName.bind(objB)('我是传进来的')

objA.getName.mybind(objB, 1, 2, 3)('我是传进来的')
