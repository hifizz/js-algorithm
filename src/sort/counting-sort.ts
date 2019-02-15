// 计数排序
// 较好的阐述：https://segmentfault.com/a/1190000012923917#articleHeader0

/**
 * 计数排序
 * @param arr 待排序的数组
 * @param maxValue 数组中的最大值
 * @returns {Array} 传入的数组
 * @attention 目前只支持大于数值大于 0
 */
export function countingSort(arr: number[], maxValue: number) {
  const bucket = new Array(maxValue + 1)
  let sortedIndex = 0
  const arrLen = arr.length
  const bucketLen = maxValue + 1

  for (let i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }

  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j
      bucket[j]--
    }
  }

  return arr
}
