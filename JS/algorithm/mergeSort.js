// 归并排序
const radomNumFunc = require('../radomNum');
const randomNun = radomNumFunc(10000);
console.log('randomNun :>> ', randomNun);


const startTime = new Date().getTime();
const res = mergeSort(randomNun);
console.log(new Date().getTime() - startTime)
console.log('res :>> ', res);

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift())
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result;
}


function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) return arr

  let middle = len >> 1,
    left = arr.slice(0, middle),
    right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right))

}