(function(){
  var app = angular.module('store-products',[]);
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
  })();