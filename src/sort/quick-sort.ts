// // 快速排序

// export function quickSort(arr: number[], left: number = 0, right?: number) {
//   const len = arr.length;
//   let partitionIndex

//   // left = typeof left != 'number' ? 0 : left,
//   right = right || len - 1;

//   if (left < right) {
//       partitionIndex = partition(arr, left, right);
//       quickSort(arr, left, partitionIndex-1);
//       quickSort(arr, partitionIndex+1, right);
//   }
//   return arr;
// }

// function partition(arr: number[], left: number ,right: number) {     // 分区操作
//   // 设定基准值（pivot;
//   const pivot = left;
//   let index = pivot + 1;
//   for (let i = index; i <= right; i++) {
//       if (arr[i] < arr[pivot]) {
//           swap(arr, i, index);
//           index++;
//       }
//   }
//   swap(arr, pivot, index - 1);
//   return index-1;
// }

// function swap(arr: number[], i: number, j: number) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function partition2(arr: number[], low: number, high: number) {
//   const pivot = arr[low];
//   while (low < high) {
//     while (low < high && arr[high] > pivot) {
//       --high;
//     }
//     arr[low] = arr[high];
//     while (low < high && arr[low] <= pivot) {
//       ++low;
//     }
//     arr[high] = arr[low];
//   }
//   arr[low] = pivot;
//   return low;
// }

// export function quickSort2(arr: number[], low: number, high: number) {
//   if (low < high) {
//     const pivot = partition2(arr, low, high);
//     quickSort2(arr, low, pivot - 1);
//     quickSort2(arr, pivot + 1, high);
//   }
//   return arr;
// }

// 快速排序使用分治法把一个串（list)分为两个子串（sub-lists)。具体算法实现
// 1.从数组中挑出一个元素，成为基准
// 2.重新排列数组，所有元素比基准值小的摆放在基准前面，所有元素比基准大的摆在基准后面（相同的可以任意一边
// 这个分区退出之后，该基准就处于数列的中间位置。成为分区操作
// 3.递归的把小于基准值元素的子数列和大于基准值元素的子数列排序

// 如何把递归去掉？

export function quickSort(arr: number[]): number[] {
  // 如果数组长度小于等于1,直接返回
  if (arr.length <= 1) {
    return arr
  }
  // 选择一个基准
  const pivotIndex = Math.floor(arr.length / 2)
  // 将基准与原数组分离
  const pivot = arr.splice(pivotIndex, 1)[0]
  // 定义左右两个空数组用来存放左右分区
  const left = []
  const right = []
  for (const item of arr) {
    if (item < pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
