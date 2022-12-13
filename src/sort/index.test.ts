import { bubbleSort } from './bubble-sort'
import { insertionSort } from './insertion_sort'
import { selectionSort } from './selection-sort'
import { countingSort } from './counting-sort'
import { quickSort } from './quick-sort'
import { mergeSort } from './merge-sort'
import { bucketSort } from './bucket-sort'
import { shellSort } from './shell-sort'
import { radixSort } from './radix-sort'
import { heapSort } from './heap-sort'

// 生成浮动数组
function createArray(max: number) {
  const arr: number[] = []
  for (let i = 0; i < max; i++) {
    arr[i] = Math.floor(Math.random() * (max + 1))
  }
  return arr
}

describe('sort ways', () => {
  const emptyArray: number[] = []
  const size = 20000
  const arr = createArray(size)
  let source: number[]
  let sorted: number[]

  beforeEach(() => {
    source = [...arr]
    sorted = [...arr].sort((a, b) => a - b)
  })

  it('bubble sorting', () => {
    expect(bubbleSort(source)).toEqual(sorted)
  })

  it('insertion sorting', () => {
    expect(insertionSort(source)).toEqual(sorted)
  })

  it('selection sorting ', () => {
    expect(selectionSort(source)).toEqual(sorted)
  })

  it('quick sorting ', () => {
    expect(quickSort(source)).toEqual(sorted)
  })

  it('counting sorting ', () => {
    expect(countingSort(source, size)).toEqual(sorted)
  })

  it('merge sorting ', () => {
    expect(mergeSort(source)).toEqual(sorted)
  })

  it('bucket sorting ', () => {
    expect(bucketSort(emptyArray, 5)).toBe(emptyArray)
    expect(bucketSort(source, 5)).toEqual(sorted)
  })

  it('shell sorting ', () => {
    expect(shellSort(source)).toEqual(sorted)
  })

  it('radix sorting ', () => {
    radixSort(source)
    expect(source).toEqual(sorted)
  })

  it('heap sorting ', () => {
    expect(heapSort(emptyArray)).toBe(emptyArray)
    expect(heapSort(source)).toEqual(sorted)
  })
})
