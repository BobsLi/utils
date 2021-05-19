/**
 * 快速排序：每次循环选取一个最小的数字放到前面的有序序列中。
 * 时间复杂度：O(n2)
 * 空间复杂度:O(1)
 * @param {array} array 需要排序的数组
 * @returns 
 */
function selectionSort(array) {
  if (array.length < 2) {
    return array
  }
  for (let i = 0; i < array.length; i++) {
    // 记录当前循环中最小的数字的索引
    let minIndex = i
    // 循环后面的数字查找最小数字
    for (let j = i + 1; j < array.length; j++) {
      // 如果当前数字小于记录的最小数字，则记录当前数字索引为最小数字
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    // 如果不是第一个数字为最小数字，则交换最小数字和当前循环数字的位置
    if (i !== minIndex) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }

  return array
}

console.log(selectionSort([6, 1, 5, 5, 8, 9, 4, 13, 5, 1]))