function factorial(num) {
  if (num > 0) {
    var mult = 1,
        result = 1;
    for (var i = 1; i < num; i++) {
      if (num - 1 != 0)
      mult *= num - i;
    }
    return num *mult;
  } else if (num === 0) {
    return 1;
  } else {
    return "enter please positive numbers";
  }
}    
/*function factorial(num) {
  return (num != 1) ? num * factorial(num - 1) : 1;
}*/

function fib(num) {
  var a = 1,
      b = 1;
  for (var i = 3; i <= num; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function multByFive(num) {
  var i = 1;
  while (i <= num) {
    return "5 multiplyed by " + num + " is equal " + 5*num;
    i++;
  }
}

