// 选择排序
const radomNumFunc = require('../radomNum');
const randomNun = radomNumFunc(100000);
console.log('randomNun :>> ', randomNun);


const startTime = new Date().getTime();
const res = selectionSort(randomNun);
console.log(new Date().getTime() - startTime)
console.log('res :>> ', res);



function selectionSort(arr) {
  const len = arr.length;
  let minPos, temp;
  for (let index = 0; index < len - 1; index++) {
    //定义一个最小数下标
    minPos = index;
    //该循环是为了找出 最小值的下标
    for (let j = index + 1; j < len; j++) {
      if (arr[minPos] > arr[j]) {
        minPos = j
      }
    }
    // 内层循环结束之后进行数值变更
    temp = arr[index];
    arr[index] = arr[minPos];
    arr[minPos] = temp;

  }
  return arr
}