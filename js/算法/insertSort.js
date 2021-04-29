function insertSort(array) {
  if (array.length < 2) {
    return array
  }

  for(let i = 1; i < array.length; i++) {
    let target = i
    for (let j = i - 1; j >= 0; j--) {
      if (array[target] < array[j]) {
        [array[target], array[j]] = [array[j], array[target]]
        target = j
      } else {
        break
      }
    }
  }

  return array

}
console.log(insertSort([6, 1, 5, 5, 8, 9, 4, 13, 5, 1]))