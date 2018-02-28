var random = {
    name:     function () {
        return chance.pickone([
            "Agate",
            "Amber",
            "Amethyst",
            "Aquamarine",
            "Emerald",
            "Malachite",
            "Moonstone",
            "Obsidian",
            "Onyx",
            "Sapphire"
        ]);
    },
    price:    function () {
        return chance.floating({
            min:   3,
            max:   80,
            fixed: chance.natural({ max: 2 })
        });
    },
    sentence: function () {
        return chance.sentence({
            words: chance.natural({ min: 5, max: 20 })
        });
    },
    image:    function (num) {
        num = num || chance.natural({ min: 1, max: 10 });
        return "src/images/gem-" + num + ".jpg";
    },
    images:    function () {
        var numbers = (new Array(9)).join('a').split('a').map((v, i) => i+1);
        var indexes = chance.shuffle(numbers).slice(0, chance.natural({ min: 2, max: 4 }));
        return indexes.map(this.image);
    },
    boolean:  function () {
        return chance.bool();
    },
    stars: function () {
        return chance.natural({ min: 1, max: 5 });
    },
    email: function () {
        return chance.email();
    }
};


var app = angular.module('app', [
    'multipleSelect'
]);


// app.controller('StoreController', function () {

//     this.numbers = [1, 2, 3, 4, 5];

//     this.colors = [
//         { id: 1, name:'black',  shade:'dark' },
//         { id: 2, name:'white',  shade:'light' },
//         { id: 3, name:'red',    shade:'dark' },
//         { id: 4, name:'blue',   shade:'dark', disabled: true },
//         { id: 5, name:'yellow', shade:'light' }
//     ];

//     //this.color1 = 2;
//     //this.color2 = 2;
//     //this.color3 = 2;
//     //this.color4 = 2;

//     //this.color1 = this.colors[2];
//     //this.color2 = this.colors[2];
//     //this.color3 = this.colors[2];
//     //this.color4 = this.colors[2];

// });






app.controller('StoreController', function () {
   this.products = (new Array(1))
       .join('a')
       .split('a')
       .map(v => {
           return {
               name:        random.name(),
               price:       random.price(),
               description: random.sentence(),
               canPurchase: random.boolean(),
               soldOut:     random.boolean(),
               image:       random.image(),
               images:      random.images(),
               reviews:     [{
                   stars:  random.stars(),
                   body:   random.sentence(),
                   author: random.email()
               }, {
                   stars:  random.stars(),
                   body:   random.sentence(),
                   author: random.email()
               }, {
                   stars:  random.stars(),
                   body:   random.sentence(),
                   author: random.email()
               }],
               specifications: []
           };
       });
});

app.controller('PanelController', function () {
   this.tab = 2;

   this.selectTab = function (tab) {
       this.tab = tab;
   };

   this.isSelected = function (tab) {
       return this.tab == tab;
   };

});

app.controller('GalleryController', function () {
   this.current = 0;

   this.setCurrent = function(index){
       this.current = index || 0;
   };
});

app.controller('ReviewController', function () {
    this.review = {
        stars: 4,
        body: "hello everybody, let me introduce myself. I'm Jimmy.",
        author: "jimmy@mail.com"
    };

    this.addReview = function(product){
       this.review.date = new Date();
       product.reviews.push(this.review);
       this.review = {};
    };
});

app.controller('SpecificationsController', function () {
    this.spec = {};
    this.colors = ["green", "red", "blue", "lightblue", "yellow"];

    this.addSpec = function (product) {
        product.specifications.push(this.spec);
        this.spec = {};
    };
});






















