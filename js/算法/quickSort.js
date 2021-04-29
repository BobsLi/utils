/**
 * 快速排序
 * 选择一个基准元素target（一般选择第一个数）
 * 将比target小的元素移动到数组左边，比target大的元素移动到数组右边
 * 分别对target左侧和右侧的元素进行快速排序
 * @param {array} array 需要排序的数组
 * @param {boolean} unique 是否需要去重 
 * @returns 
 */
function quickSort(array, unique = false) {
  if (array.length < 2) {
    return array
  }

  const target = array[0]
  const left = []
  const right = []

  for (let i = 1; i < array.length; i++) {
    const current = array[i]
    // 当前值小于目标，放在左边数组
    // 当前值大于目标，放在右边数组
    if (current < target) {
      left.push(current)
    } else if (current > target) {
      right.push(current)
    } else {
      if (!unique) {
        right.push(current)
      }
    }
  }

  return quickSort(left, unique).concat([target], quickSort(right, unique))
}

console.log(quickSort([6, 1, 5, 5, 8, 9, 4, 13, 5, 1], false))