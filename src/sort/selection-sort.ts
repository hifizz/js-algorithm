// 选择排序
// 选择排序的主要思想是是循环的次数从列表中选出最小的值，放置在当前假定最小的位置上。

export function selectionSort(arr: number[]) {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    // 设置i为当前默认最小值的index
    let minIndex = i
    // 从i之后值里面找比arr[i]小的值的index
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        // 把i之后比arr[i]小的值的index设置为minindex
        minIndex = j
      }
    }
    // 用temp把arr[i]存起来
    const temp = arr[i]
    // 将arr[i]设置为最小值（通过上面找到的minIndex）
    arr[i] = arr[minIndex]
    // 将原来minIndex的值改为arr[i]
    arr[minIndex] = temp
  }
  return arr
}
