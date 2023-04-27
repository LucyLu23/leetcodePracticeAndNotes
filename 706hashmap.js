var hashMap = function () {
  this.map = {}; //applying object to create a hashmap
};

var mapSet = function (key, value) {
  this.map[key] = value;
};

var mapGet = function (value) {
  this.map[key] === undefined ? -1 : this.map[key]; //=== and !== , are different order
};

var mapDelete = function (value) {
  this.map[key] = undefined; //not this.map[key]====undefined
};
