import { insertionSort } from './insertion_sort'

// 基数排序

/**
 * 基本思想：按照整数的每个位数分组，
 *
 */

// https://segmentfault.com/a/1190000012923917#articleHeader3

export function radixSort(array: number[]) {
  const max = Math.max.apply(0, array)
  const times = getLoopTimes(max)
  const len = array.length
  const buckets = []
  for (let i = 0; i < 10; i++) {
    buckets[i] = [] // 初始化10个桶
  }
  for (let radix = 1; radix <= times; radix++) {
    // 个位，十位，百位，千位这样循环
    lsdRadixSort(array, buckets, len, radix)
  }
  return array
}

// 根据数字某个位数上的值得到桶的编号
// function getBucketNumer(num: number, d: number) {
//   return Number(Array.from((num + "")).reverse()[d]);
// }

// 或者这个
function getBucketNumer(num: number, i: number) {
  return Math.floor((num / Math.pow(10, i)) % 10)
}

// 获取数字的位数
function getLoopTimes(num: number) {
  let digits = 0
  do {
    if (num > 1) {
      digits++
    } else {
      break
    }
  } while ((num = num / 10))
  return digits
}

/**
 *
 * @param array 数组
 * @param buckets 桶集合
 * @param len
 * @param radix
 */
function lsdRadixSort(array: number[], buckets: any, len: number, radix: number) {
  // 入桶
  for (let i = 0; i < len; i++) {
    const el = array[i]
    const index = getBucketNumer(el, radix)
    buckets[index].push(el)
  }
  let k = 0
  // 重写原桶
  for (let i = 0; i < 10; i++) {
    const bucket = buckets[i]
    /** 对每个桶进行排序 */
    insertionSort(bucket)
    for (const item of bucket) {
      array[k++] = item
    }
    bucket.length = 0
  }
}
