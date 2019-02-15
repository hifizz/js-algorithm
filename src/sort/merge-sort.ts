// 归并排序

// https://segmentfault.com/a/1190000017833332

/**
 *
 * @param p 数组的开始下标
 * @param r 数组的结束下标
 */
export function divide(p: number, r: number) {
  return Math.floor((p + r) / 2)
}

function merge(A: number[], p: number, q: number, r: number) {
  const A1 = A.slice(p, q)
  const A2 = A.slice(q, r)
  A1.push(Number.MAX_SAFE_INTEGER)
  A2.push(Number.MAX_SAFE_INTEGER)

  for (let i = p, j = 0, k = 0; i < r; i++) {
    if (A1[j] < A2[k]) {
      A[i] = A1[j]
      j++
    } else {
      A[i] = A2[k]
      k++
    }
  }
}

export function mergeSort(A: number[], p = 0, r?: number) {
  r = r || A.length
  if (r - p === 1) {
    return
  }
  const q = divide(p, r)
  mergeSort(A, p, q)
  mergeSort(A, q, r)
  merge(A, p, q, r)

  return A
}
