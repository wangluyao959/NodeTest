/**
 * 回调函数练习
 */
var i = 1;
let obj = {
  a: 0
}
/**
 * defineProperty 练习
 */
Object.defineProperty(obj, "a", {
  get() {
    return i++
  }
})


/**
 * 回调练习 一
 */


console.log("a");

function a(name, cb) {
  console.log("b");
  cb()
}
console.log("c");
a("网路原配", (data) => {
  console.log("d");
})

/**
 * 回调练习 二
 */
//定义一个参数为函数的回调
function goHome(cb) {
  let res = {
    "name":"王路尧",
    "age":23,
    "phone":11
  };
  console.log("我在回调函数里边");
  cb(res)
}

goHome((res) => {
  let json = JSON.stringify(res)
  console.log('json :>> ', json);
})