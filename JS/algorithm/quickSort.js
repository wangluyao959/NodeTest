const radomNumFunc = require('../radomNum');
const randomNun = radomNumFunc(10000000);
console.log('randomNun :>> ', randomNun);


const startTime = new Date().getTime();
const res = quickSort(randomNun);
console.log(new Date().getTime() - startTime)
console.log('res :>> ', res);



function quickSort(arr) {
  if (arr.length < 1) {
    return arr
  }
  //取基准点，一般取数组中间位数
  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr.splice(middleIndex, 1)[0];
  //定义左右分区
  const left = [];
  const right = [];

  // 对数组进行循环进行左右区间插入
  for (let index = 0; index < arr.length; index++) {
    middleValue > arr[index] ? left.push(arr[index]) : right.push(arr[index])
  }

  //区分结束之后继续进行递归，对左右分区进行
  return [...quickSort(left), middleValue, ...quickSort(right)]
}