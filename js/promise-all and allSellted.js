/**
 * 实现promise中的all
 * @param {array} list promise列表
 * @returns 
 */
 function myAll(list) {
  return new Promise((resolve, reject) => {
    const result = []
    list.forEach((item, index) => {
      item.then(res => {
        result[index] = res
        if (result.length === list.length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
}

/**
 * 实现 promise中的allSellted
 * @param {*} list 
 * @returns 
 */
function myAllSellted(list) {
  return new Promise(resolve => {
    const result = []
    list.forEach((item, index) => {
      item.then(res => {
        result[index] = {
          status: 'fulfilled',
          value: res
        }
        if (result.length === list.length) {
          resolve(result)
        }
      }).catch(err => {
        result[index] = {
          status: 'rejected',
          reason: err
        }
        if (result.length === list.length) {
          resolve(result)
        }
      })
    })
  })
}


let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('111')
    // reject('111')
  }, 2000)
})


let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('222')
    // reject('222')
  }, 1000)
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('333')
    // reject('333')
  }, 3000)
})

Promise.all([p1, p2, p3]).then(res => {
  console.log('all', res)
}).catch(err => {
  console.log('allCatch', err)
})

myAll([p1, p2, p3]).then(res => {
  console.log('myAll', res)
}).catch(err => {
  console.log('myAllCatch', err)
})

Promise.allSettled([p1, p2, p3]).then(res => {
  console.log('allSettled', res)
})

myAllSellted([p1, p2, p3]).then(res => {
  console.log('myAllSellted', res)
})