const radomNumFunc = require('../radomNum');
const randomNun = radomNumFunc(100);
console.log('randomNun :>> ', randomNun);


const startTime = new Date().getTime();
const res = shellSort(randomNun);
console.log(new Date().getTime() - startTime)
console.log(res)


function shellSort(arr) {

  let len = arr.length,
    gap = Math.floor(len / 2),
    temp;

  for (gap; gap >= 1; gap = Math.floor(gap / 2)) {
    for (let index = gap; index < len; index++) {
      temp = arr[index];
      let j = index - gap;
      for (; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
};