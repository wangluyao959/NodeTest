/**
 * generator函数练习
 */
// 1.使用generator使对象可遍历
let jane = {
  fivth: "5",
  first: "1",
  third: "3",
  fourth: "4",
  second: "2",
}
let m = new Map();
//创建一个generator函数
function* objectEntries(){
  let propKeys/**获取调用对象的所有的key*/ = /**获取调用对象*/Object.keys(this);
  for (let key of propKeys) {
    yield [/**key值*/key,/**value值*/this[key]]
  }
}
/**
 * genrator函数，可以生成iterator迭代器，因此，可以直接赋值。
 * */
jane[Symbol.iterator] = objectEntries;

for (let [key,value] of jane) {
  /**Map练习*/
  m.set(key,value)
}
console.log(m);