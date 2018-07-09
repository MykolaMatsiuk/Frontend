const calculator = () => {
  let total,
      firstN,
      secondN;

  return {
    add: function (firstN, secondN) {
      total = firstN + secondN;
      return total;
    },
    substract: (firstN, secondN) => {
      total = firstN - secondN;
      return total;
    },
    divide: (firstN, secondN) => {
      total = firstN / secondN;
      return total;
    },
    multiply: (firstN, secondN) => {
      total = firstN * secondN;
      return total;
    },
    total: () => total
  }
};

module.exports = calculator();
