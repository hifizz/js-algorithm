// 冒泡排序算法描述
// 1.假定第一个元素（min）最小
// 2.0 选择第二个元素（next）和最小的元素进行比较
// 2.1 如果next小于min，则交换两者位置；如果大于或者等于，则不变
// 2.2 此时最小值的index不变（因为这个index是用来保存列表里最小值的）
// 3.0 改变next的索引值，让arr[index]和arr[next]对比，重复2的各个步骤
// 3.1 内存循环完毕后会退出
// 4.0 外层循环index+1，并重复2的各个步骤
// 5.0 外层循环结束，数组已排序好

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
