// 希尔排序
// 将整个待排序记录序列分割为若干个子序列,然后对每一个子序列进行直接插入排序.

export function shellSort(arr: number[]) {
  const len = arr.length
  let temp
  let gap = 1
  // 动态定义间隔序列
  while (gap < len / 5) {
    gap = gap * 5 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i]
      let j
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}
