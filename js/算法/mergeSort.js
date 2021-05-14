/**
 * 归并排序
 * 选择一个基准元素target（一般选择第一个数）
 * 将比target小的元素移动到数组左边，比target大的元素移动到数组右边
 * 分别对target左侧和右侧的元素进行快速排序
 * @param {array} array 需要排序的数组
 * @returns 
 */
function mergeSort(array) {
  console.log(array)
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const front = array.slice(0, mid);
  const end = array.slice(mid);
  return merge(mergeSort(front), mergeSort(end));
}

function merge(front, end) {
  console.log('merge', front, end)
  const temp = [];
  while (front.length && end.length) {
    if (front[0] < end[0]) {
      temp.push(front.shift());
    } else {
      temp.push(end.shift());
    }
  }
  while (front.length) {
    temp.push(front.shift());
  }
  while (end.length) {
    temp.push(end.shift());
  }
  return temp;
}

console.log(mergeSort([6, 1, 5, 5, 8, 9, 4, 13, 5, 1]))