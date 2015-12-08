(function() {
    var app = angular.module('store', []);

    app.directive('productTitle', function(){
        return {
          restrict: 'E',
          templateUrl: 'product-title.html'            
        };
    });

    app.directive('productPanels', function(){
      return {
        restrict: 'E',
        templateUrl: 'product-panels.html',
        controller:function(){
              this.tab = 1;
              this.selectTab = function(setTab)  {
              this.tab = setTab;        
              };
              this.isSelected = function(checkTab){
                return this.tab == checkTab;
              };
             this.setCurrent = function(value) {
              if (value !== undefined) {
               this.current = value;
               } else {
                this.current = 0;
               };      
             };        
           },
         controllerAs: 'panel'
       };
      });

    app.controller('StoreController', function() {
          this.products = gems;        
    });

   app.controller('ReviewController', function() {  
        this.review={};
        this.addReview = function(product) {
          product.reviews.push(this.review);
          this.review ={};
      };
    });
  
    var gems = [
    {
        name: "Dodecahedron",
        price: 2.95,
        description: 'Some gemas have hidden qualities beyond theire luster',
        canPurchase: true,
        soldOut: true,
        images: [
        {
        	full: 'dodecahedron-01-full.jpg',
        	thumb: 'dodecahedron-01-thumb.jpg'
        },
		{
        	full: 'dodecahedron-01-full.jpg',
        	thumb: 'dodecahedron-02-thumb.jpg'
        }
        ],
        reviews: [
        {
            stars: 5,
            body: "I love this product!",
            author: "joe@thomas.com"
        },
        {
            stars: 1,
            body: "This product sucks!",
            author: "tim@hater.com"        
        }
        ]
    },
    {
        name: "Pentagonal Gem",
        price: 5.95,
        description: 'Some gemas have hidden qualities beyond theire luster',
        canPurchase: false,
        soldOut: true,
        images: [
        {
        	full: 'pentagonal-01-full.jpg',
        	thumb: 'pentagonal-01-thumb.jpg'
        },
		{
        	full: 'pentagonal-01-full.jpg',
        	thumb: 'pentagonal-02-thumb.jpg'
        }
        ],
        reviews: [
        {
            stars: 5,
            body: "I love this product!",
            author: "joe@thomas.com"
        },
        {
            stars: 1,
            body: "This product sucks!",
            author: "tim@hater.com"
        }
        ]
    }
    ];
})();