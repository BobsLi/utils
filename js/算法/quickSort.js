/**
 * 快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。
 * 选择一个基准元素target（一般选择第一个数）
 * 将比target小的元素移动到数组左边，比target大的元素移动到数组右边
 * 分别对target左侧和右侧的元素进行快速排序
 * @param {array} array 需要排序的数组
 * @param {boolean} unique 是否需要去重 
 * @returns 
 */
function quickSort(array, position = 'all') {
  console.log(array, position)
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
    }
  }

  // return quickSort(left, unique).concat([target], quickSort(right, unique))
  const sortResult = [...quickSort(left, 'left'), target, ...quickSort(right, 'right')]
  console.log('sortResult', sortResult)
  return sortResult
}

console.log(quickSort([6, 1, 5, 5, 8, 9, 4, 13, 5, 1]))