'use strict';

angular.module('emotys')
  .controller('MainCtrl', function($rootScope, $famous, Auth,$timeout,fbutil) {
  		$rootScope.auth = Auth;
  		$rootScope.auth.$onAuth(function(authData) {
	    	$timeout(function() {
	      		$rootScope.user = authData;
	    	});
		});

		$rootScope.syncedValue = fbutil.syncObject('syncedValue');
  });