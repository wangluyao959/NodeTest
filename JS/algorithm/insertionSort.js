// 插入排序
const radomNumFunc = require('../radomNum');
const randomNun = radomNumFunc(100000);
console.log('randomNun :>> ', randomNun);


const startTime = new Date().getTime();
const res = insertionSort(randomNun);
console.log(new Date().getTime() - startTime)
console.log('res :>> ', res);



function insertionSort(arr) {
  const len = arr.length;
  if (arr.length <= 1) return;

  let preIndex, curren;
  for (let index = 1; index < len; index++) {
    //比较当前数值和前一个数值的大小。
    preIndex = index - 1;
    curren = arr[index];

    while (preIndex >= 0 && arr[preIndex] > curren) { //满足条件时进行置换
      arr[preIndex + 1] = arr[preIndex];
      preIndex--
    }
    //可以这么理解：如果没有进行置换的话，不会对当前元素进行赋值。
    if (preIndex + 1 != index) {
      //将当前元素添加到预留空位
      arr[preIndex + 1] = curren;
    }
  }

  return arr
}