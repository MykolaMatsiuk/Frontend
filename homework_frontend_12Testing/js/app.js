function sum (a, b) {
  return a + b;
};

function devide (a, b) {
  return a / b;
};

var human = {
  name: 'string',
  age: 25,
  canTalk: true,
  nothing: null,
  speak: function () {
    return "This is a speech!";
  }
};

/**
 *  a1 - initial value
 *  d - difference
 *  n - amount of numbers
 *  return array
 */
var arithProg = function (a1, d, n) {
  var arr = [a1];
  for (var i = 1; i < n; i++) {
    arr.push(a1 + i * d);
  };
  return arr;
};

var unknown;

var none = null;

function Animal() {
  fur = true;
};

var rabbit = new Animal();

