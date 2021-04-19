// 创建对象的方法
// 1. 字面量
const o1 = { a: 1 }
// Object基础对象
const o2 = new Object({ b: 2 })

// 构造函数
function Person(name) {
  this.name = name
  return {
    age: 18
  }
}

const o3 = new Person('boblee')

// Object.create
const o4 = Object.create({
  name: 'joyce'
})

// 手法new方法
function myNew(func, ...args) {
  // const obj = Object.create(func.prototype)
  const obj = {}
  obj.__proto__ = func.prototype
  const result = func.apply(obj, args)
  return result instanceof Object ? result : obj
}

