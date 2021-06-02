function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function () {
      console.log('get!');
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({
        val: temperature
      });
    }
  });

  this.getArchive = function () {
    return archive;
  };
}
let a = new Archiver()
console.log('a :>> ', a);
a.temperature = 11;
a.temperature = 123;
console.log('a.temperature :>> ', a.temperature); //对元素属性进行访问
console.log('a.getArchive() :>> ', a.getArchive());