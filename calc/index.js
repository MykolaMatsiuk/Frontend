const calculator = () => {
  let total,
      firstN,
      secondN;

  return {
    add (firstN, secondN) {
      total = firstN + secondN;
      return total;
    },
    substract (firstN, secondN) {
      total = firstN - secondN;
      return total;
    },
    divide (firstN, secondN) {
      if (secondN) {
        total = firstN / secondN;
        return total;
      } else {
        return "You can not divide on zero";
      }
    },
    multiply (firstN, secondN) {
      total = firstN * secondN;
      return total;
    },
    total: () => total
  }
};

module.exports = calculator();
