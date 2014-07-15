angular.module('magServices', ['ngResource'])
 
.factory('Page', ['$resource',
  function($resource){
    return $resource('content/:pageId.json', {}, {
      query: {method:'GET', params:{pageId:'pages'}, isArray:true}
    });
  }]);