(function () {
"use strict";

angular.module('public')
// .controller('MenuController', MenuController);
//
// MenuController.$inject = ['menuCategories'];
// function MenuController(menuCategories) {
//   var $ctrl = this;
//   $ctrl.menuCategories = menuCategories;
// }

.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['menuCategories'];
function MyInfoController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = "";
  //menuCategories;
}

})();
