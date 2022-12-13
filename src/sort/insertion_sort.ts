// 插入排序
// [插入排序的简单理解](https://www.jianshu.com/p/2e12409c086e)

export function insertionSort(arr: number[]) {
  const len = arr.length

  let i
  let j
  for (i = 1; i < len; i++) {
    const temp = arr[i]
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }

  return arr
}
