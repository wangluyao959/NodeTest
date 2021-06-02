module.exports = function (len) {
  const arr = [];
  for (let index = 0; index < len; index++) {
    arr.push(Math.ceil(Math.random() * len))
  }
  return arr
};

