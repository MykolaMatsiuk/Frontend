//first
var admin,
    name;
name = 'Harry';
admin = name;
console.log(admin);

//second
var p = 2.5,
    l = 23,
    S = 0.05;
console.log(p * l / S);

//third
var num = 0;
if (num > 0) {
  console.log(1);
} else if (num < 0) {
  console.log(-1);
} else {
  console.log(0);
};

//fourth
function stringify (num) {
  var arr = num.toString().split('');
  var first = arr[0];
  var second = arr[1];
  if (arr.length == 1) {
    switch (num) {
      case 1:
        return 'one';
        break;
      case 2:
        return 'two';
        break;
      case 3:
        return 'three';
        break;
      case 4:
        return 'four';
        break;
      case 5:
        return 'five';
        break;
      case 6:
        return 'six';
        break;
      case 7:
        return 'seven';
        break;
      case 8:
        return 'eight';
        break;
      case 9:
        return 'nine';
        break;
      case 0:
        return 'zero';
        break;  
    }
  } else {
    switch(num) {
      case 10:
        return 'ten';
        break;
      case 11:
        return 'eleven';
        break;
      case 12:
        return 'twelve';
        break;
      case 13:
        return 'thirteen';
        break;
      case 14:
        return 'fourteen';
        break;
      case 15:
        return 'fifteen';
        break;
      case 16:
        return 'sixteen';
        break;
      case 17:
        return 'seventeen';
        break;
      case 18:
        return 'eighteen';
        break;
      case 19:
        return 'nineteen';
        break;
    }
  }
}
console.log(stringify(22));

//fifth
for (var i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//sixth
function simple (a, b) {
  point:
  for (var i = a; i <= b; i++) {
    for (var j = a; j < i; j++) {
      if (i % j == 0) {
        continue point;
      }
    }
    console.log(i);
  }
}
simple(2,10);

//seventh
function isSimple (num) {
  if (num == 2) return true;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  return true;
  }
}
console.log(isSimple(40));

//eighth
var user = {
  age: null,
  isAdmin: null,
  grant: function() {
    if (this.age > 18) {
      return this.isAdmin = true;
    } else {
      return this.isAdmin = false;
    }
  }
}

var petya = Object.create(user);
petya.age = 17;
petya.grant();
console.log(petya.isAdmin);

//ninth
console.log('Some time ago I was here'.replace('Some time ago', 'Yesterday')+' and there');
console.log('10, 20, 30, 40'.split(', ').join('; '));

//tenth
var numbers = [4, 5, 2, 1, 8, 2, 9],
    numbers2 = numbers.sort(function (a, b) { return a - b; });
console.log(numbers2);

//eleventh
function addClass (str, word) {
  if (str && word) {
    if (str.indexOf(word) == -1) {
      return str.concat(" " + word);
    }
    return str;
  }
}

function removeClass (str, word) {
  if (str && word) {
    if (str.indexOf(word) != -1) {
      return str.replace(word, "");
    }
    return str;
  }
}

function toggleClass (str, word) {
  if (str && word) {
    if (str.indexOf(word) == -1) {
      return str.concat(" ", word);
    } else {
      return str.replace(word, "");
    }
  }
}

str = "top new green";
console.log(str);
str = addClass(str, "old");
console.log(str);
str = removeClass(str, "old");
console.log(str);
str = toggleClass(str, "top");
console.log(str);

//twelfth
function toCamelCase(str) {
  var arr = str.split('-'),
      i = 1,
      length = arr.length;
  for (; i < length; i++) {
     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
}
console.log(toCamelCase('-fdg-sdf-sdf'));

//thirteenth
var names = [], total = 0, sorted,
    users = [
      { name: 'Alex', cash: 43 },
      { name: 'John', cash: 274 },
      { name: 'Carl', cash: 82 },
      { name: 'Bill', cash: 14 }
    ];
for (var i = 0; i < users.length; i++) {
  names.push(users[i].name);
  total += users[i].cash;
}
sorted = users.sort(function (a, b) { return a.cash - b.cash });
console.log(names);
console.log(total);
console.log(sorted);

//fourteenth
function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandom(2, 5));

//fifteenth
function btnClicker () {
  var btn = document.getElementById('btn');
  btn.innerText = 'Button';
  var count = 0;
  btn.onclick = function () {
    btn.innerText = 'Clicks: ' + ++count;
  };
}
btnClicker();

//sixteenth
btnB = document.querySelector('#bottomBtn');
btnB.onclick = function () {
  setInterval(function () {
    window.scrollTo(8, -1803.09375);
  }, 2000);
}
