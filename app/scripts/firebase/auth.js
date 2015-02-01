angular.module('emotys')
.factory("Auth", ["$firebaseAuth", function($firebaseAuth) {
  var ref = new Firebase("https://jesusemoty.firebaseio.com/");
  return $firebaseAuth(ref);
}]);