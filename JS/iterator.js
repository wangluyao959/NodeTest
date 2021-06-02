const obj = {
  a: 1,
  b: "22",
  c: "哈啊哈"
}

// Object.defineProperty(obj, Symbol.iterator, {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: function () {
//     let index = 0;
//     let _this = this;
//     let arr = Object.keys(_this)
//     return {
//       next: function () {
//         const res = {
//           value: _this[arr[index++]],
//           done: index > arr.length
//         }
//         console.log('res :>> ', res);
//         return res
//       }
//     }
//   }
// })



Object.defineProperty(obj, Symbol.iterator, {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function* () {
    const res = {
      value: 111,
      done: false
    }
    console.log('res :>> ', res);
    yield res;
    console.log('res :>> ', res);
    yield res;
    console.log('res :>> ', res);
    yield res;
    console.log('res :>> ', res);
    yield res;
    console.log('res :>> ', res);
    yield res;
    console.log('res :>> ', res);
    yield res;
    console.log('res :>> ', res);
    yield res;
  }
})
//返回迭代器
const newIterator = obj[Symbol.iterator]();
newIterator.next();
newIterator.next();
newIterator.next();
newIterator.next();
newIterator.next();
newIterator.next();
newIterator.next();