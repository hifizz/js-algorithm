// 堆排序

// 堆是一个完全二叉树

function swap(arr: number[], a: number, b: number) {
  if (a === b) {
    return
  }
  const c = arr[a]
  arr[a] = arr[b]
  arr[b] = c
}

export function heapSort(arr: number[]) {
  const n = arr.length
  // 若只有一个或者没有，则返回
  if (n <= 1) {
    return arr
  }
  // 若有多个，则建最大堆
  else {
    // 建堆（Build-Max-Heap）
    for (let i = Math.floor(n / 2); i >= 0; i--) {
      maxHeapify(arr, i, n)
    }

    // 堆排序
    for (let j = 0; j < n; j++) {
      swap(arr, 0, n - 1 - j)
      maxHeapify(arr, 0, n - 2 - j)
    }
    return arr
  }
}

function maxHeapify(arr: number[], i: number, size: number) {
  // 左子节点为2i + 1，右子节点为2i + 2
  const l = 2 * i + 1
  const r = 2 * i + 2
  let largest = i

  // 若子节点比节点大，则标记
  if (l <= size && arr[l] > arr[largest]) {
    largest = l
  }
  if (r <= size && arr[r] > arr[largest]) {
    largest = r
  }
  // 若标记有子节点，则交换父子位置，并递归计算
  if (largest !== i) {
    swap(arr, i, largest)
    maxHeapify(arr, largest, size)
  }
}
