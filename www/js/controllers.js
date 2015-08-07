angular.module('magazine.controllers', [])

.controller('MagPageCtrl', ['$scope', '$ionicSlideBoxDelegate', '$timeout', '$http',
  function ($scope, $ionicSlideBoxDelegate, $timeout, $http) {
      
      $http.get('content/pages.json').success(function(data) {
            $scope.pages = data;
        })
      $timeout(function(){
          $ionicSlideBoxDelegate.update();
          /*$ionicSlideBoxDelegate.next();*/
      }, 500);
      console.log($scope.pages);
  }])

.controller('MagArticleCtrl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get('https://googledrive.com/host/0B0778NZ3pAKKc0dTblBwOVVfRVk/articles.json').success(function(data) {
            $scope.articles = data;
            console.log($scope.articles);
            $scope.videos = [];
            
           /* var atrributes = "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffb40d";*/
            
            angular.forEach($scope.articles, function(article){
                
               $scope.videos.push($sce.trustAsResourceUrl(article.video + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffb40d"));
                console.log(article.video);
            });
            
           
            /*$scope.articleVideo = $sce.trustAsResourceUrl($scope.articles[num].video + atrributes);*/
        })
        
    }])

.controller('CoverCtrl', ['$scope', '$http', 
    function($scope, $http) {
        $http.get('content/cover.json').success(function(data) {
        $scope.cover = data;
        
        })
    }])

/*.controller('VideoCtrl', ['$scope', '$sce', 
    function($scope, $sce) {
        var atrributes = "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffb40d";
        $scope.pageVideo = $sce.trustAsResourceUrl($scope.page.video + atrributes);
    }])*/

/*.controller('MenuCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hide', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});*/



.controller('PageCtrl', ['$scope', '$stateParams', 'Page',
    function($scope, $stateParams, Page) {
        $scope.page = Page.get({pageId:$stateParams.pageId}, function(page){
            $scope.mainImageUrl = page.images[0];
            
        })
       
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
                
    }]);

//.controller('ModalCtrl', function($scope, $ionicActionSheet, $ionicPopup) {
//        $scope.hideModal = function() {
//          $scope.modal.hide();
//        };
//        $scope.removeModal = function() {
//          $scope.modal.remove();
//        };
//        $scope.openActionSheet = function() {
//          $ionicActionSheet.show({
//            // The various non-destructive button choices
//            buttons: [
//              { text: 'Share' },
//              { text: 'Move' },
//            ],
//            // The text of the red destructive button
//            destructiveText: 'Delete',
//            // The title text at the top
//            titleText: 'Modify your album',
//            // The text of the cancel button
//            cancelText: 'Cancel',
//            // Called when the sheet is cancelled, either from triggering the
//            // cancel button, or tapping the backdrop, or using escape on the keyboard
//            cancel: function() {
//            },
//            // Called when one of the non-destructive buttons is clicked, with
//            // the index of the button that was clicked. Return
//            // "true" to tell the action sheet to close. Return false to not close.
//            buttonClicked: function(index) {
//              return true;
//            },
//            // Called when the destructive button is clicked. Return true to close the
//            // action sheet. False to keep it open
//            destructiveButtonClicked: function() {
//              return true;
//            }
//          });
//        };
//        $scope.openPopup = function() {
//          $ionicPopup.alert({
//           title: 'Hey!',
//           content: 'Don\'t do that!'
//          }).then(function(res) {});
//        };
//      });
//      domTrace.observe()