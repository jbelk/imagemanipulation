'use strict';

angular.module('emotys',
  ['ui.router',
    'famous.angular' ,
    'firebase', 
    'firebase.utils',
     'simpleLogin',
     'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('discover', {
        url: '/discover',
        templateUrl: 'partials/discover.html',
        controller: 'discover'
      })
      .state('meme', {
        url: '/meme',
        templateUrl: 'partials/meme.html',
        controller: 'meme'
      })
      .state('catalog', {
        url: '/catalog',
        templateUrl: 'partials/catalog.html',
        controller: 'catalog'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'login'
      })
      .state('account', {
        url: '/account',
        templateUrl: 'partials/account.html',
        controller: 'account',
      resolve: {
        // forces the page to wait for this promise to resolve before controller is loaded
        // the controller can then inject `user` as a dependency. This could also be done
        // in the controller, but this makes things cleaner (controller doesn't need to worry
        // about auth status or timing of displaying its UI components)
        user: ['simpleLogin', function(simpleLogin) {
          return simpleLogin.getUser();
        }]
      }
      });

    $urlRouterProvider.otherwise('/discover');
  })

 .constant('loginRedirectPath', '/login')

  // your Firebase data URL goes here, no trailing slash
  .constant('FBURL', 'https://jesusemoty.firebaseio.com')  

.run(function($rootScope, $famous) {

    var Transitionable = $famous['famous/transitions/Transitionable'];

     $rootScope.btnbg= new Transitionable([0.125, 0]);

    $rootScope.discovercolor = "#065163";
    $rootScope.memecolor = "#065163";
    $rootScope.catalogcolor = "#065163";

    var SpringTransition = $famous['famous/transitions/SpringTransition'];
    Transitionable.registerMethod('spring', SpringTransition);

    $rootScope.searchsize = new Transitionable([0, 65]);
    $rootScope.searchscale = new Transitionable([1,1,1]);
    $rootScope.searching = false;
    
    $rootScope.opensearch = function () {
      if ($rootScope.searching === true) {
        $rootScope.searchsize.set([0, 65], {duration: 200, curve: 'easeInOut'});
        $rootScope.searchscale.set([1,1,1],  {
                method: 'spring',
                period:300,
                dampingRatio: 0.2
              });
        $rootScope.searching = false;
      } else{
        $rootScope.searchsize.set([350, 65], {duration: 200, curve: 'easeInOut'});
        $rootScope.searchscale.set([1.2,1.2,1.2],  {
                method: 'spring',
                period:300,
                dampingRatio: 0.2
              });
        $rootScope.searching = true;
      }
    }
});
