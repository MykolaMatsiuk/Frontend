var random = {
  name:     function () {
    return chance.pickone([
      "Nike",
      "Adidas",
      "Reebok",
      "Puma",
      "Vans",
      "Jordan",
      "New Balance",
      "Converse"
    ]);
  },
  model:    function () {
    return chance.pickone([
      "Superstar",
      "Cortez",
      "Flight",
      "Classic",
      "Bomb"
    ])
  },
  price:    function () {
    return chance.floating({
      min:   3,
      max:   120,
      fixed: chance.natural({ max: 2 })
    });
  },
  sentence: function () {
    return chance.sentence({
      words: chance.natural({ min: 5, max: 20 })
    });
  },
  image:    function () {
    return "images/shoe-" + chance.natural({ min: 1, max: 10 }) + ".jpg";
  },
  boolean:  function () {
    return chance.bool();
  }
};

var app = angular.module('app', []);

app.controller('PageController', function () {

});

app.controller('ProductController', function () {
  this.products = (new Array(10))
    .join('a')
    .split('a')
    .map(v => {
      return {
        name:        random.name(),
        model:       random.model(),
        price:       random.price(),
        description: random.sentence(),
        canPurchase: random.boolean(),
        sold:        random.boolean(),
        image:       random.image(),
        images:      [random.image(), random.image(), random.image()],
        sizeUS:      [7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 12.0, 13.0],
        sizeUK:      [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 12.0],
        sizeEU:      [40.0, 40.5, 41.0, 41.5, 42.0, 42.5, 43.0, 43.5, 44.0,
                      44.5, 45.0, 45.5, 46.0, 46.5, 47.0, 47.5, 48.0],
        sizeCM:      [25.0, 25.5, 26.0, 26.5, 27.0, 27.5, 28.0, 
                      28.5, 29.0, 29.5, 30.0, 30.5, 31.5, 32.0]
      };
    });

});

app.controller('SizeController', function () {
  this.tab = 1;

  this.selectTab = function (tab) {
    this.tab = tab;
  };

  this.isSelected = function (tab) {
    return this.tab == tab;
  };

});

app.controller('SizeNumController', function () {
  this.tab = 1;

  this.selectTab = function (tab) {
    this.tab = tab;
  };

  this.isSelected = function (tab) {
    return this.tab == tab;
  };

});

app.filter('float', function () {
  return function (input) { 
    return input.toFixed(1);
  };
});
