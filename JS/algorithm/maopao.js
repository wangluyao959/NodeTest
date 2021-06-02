const radomNumFunc = require('../radomNum');
const randomNun = radomNumFunc(100000);
console.log('randomNun :>> ', randomNun);


const startTime = new Date().getTime();
const res = bubbleSort(randomNun);
console.log(new Date().getTime() - startTime)


//普通写法
function bubbleSort(arr) {
  //定义数组长度
  const arrLen = arr.length;

  for (let index = 0; index < arrLen; index++) {
    for (let j = 0; j < arrLen - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }

    }
  }
  return arr
}