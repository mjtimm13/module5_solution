(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $signUpCtrl = this;

  $signUpCtrl.submit = function() {
      console.log($signUpCtrl.user.favitem);
      if ($signUpCtrl.user.favitem === undefined) {
         $signUpCtrl.user.favitem = 'XX';
         MenuService.setUserProfile($signUpCtrl.user);
         $signUpCtrl.success = true;
         $signUpCtrl.error = false;
      } else {
         MenuService.getFavoriteItem($signUpCtrl.user.favitem).then(function (response) {
         console.log(response.data);
         $signUpCtrl.user.favItem = response.data;
         console.log($signUpCtrl.user.favItem);
         MenuService.setUserProfile($signUpCtrl.user);
         $signUpCtrl.success = true;
         $signUpCtrl.error = false;

    }, function (response) {
       $signUpCtrl.user.favitem = 'NF';
       MenuService.setUserProfile($signUpCtrl.user);
       $signUpCtrl.success = true;
       $signUpCtrl.error = false;
    });
  };
}
}

})();
