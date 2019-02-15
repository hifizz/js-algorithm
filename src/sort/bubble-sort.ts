export function bubbleSort(arr: number[]) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }

  return arr
}
