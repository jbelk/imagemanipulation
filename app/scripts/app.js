'use strict';

angular.module('emotys')
  .controller('discover', function($scope, $famous,$q, $state, $rootScope,$window) {
    
    var Transitionable = $famous['famous/transitions/Transitionable'];
    $rootScope.btnbg.set([0.125, 0], {duration: 200, curve: 'easeInOut'});

    $rootScope.discovercolor = "#fff";
    $rootScope.memecolor = "#065163";
    $rootScope.catalogcolor = "#065163";

    var EventHandler = $famous['famous/core/EventHandler'];
    $scope.eventHandler = new EventHandler();

   //filter controls 

   $scope.trianglePosition = new Transitionable([0.14, 1]);
   $scope.boldnew = 600;
   $scope.boldpop = 500;
   $scope.boldtre = 500;


    $scope.filterNewest =function () {
      $scope.boldpop = 500;
      $scope.boldtre = 500;
      $scope.boldnew = 600;
      $scope.trianglePosition.set([0.14, 1], {duration: 200, curve: 'easeInOut'}); 
    };

    $scope.filterPopular =function () {
      $scope.boldtre = 500;
      $scope.boldnew = 500;
      $scope.boldpop = 600;
      $scope.trianglePosition.set([0.48, 1], {duration: 200, curve: 'easeInOut'});
    };

    $scope.filterTrending =function () {
      $scope.boldpop = 500;
      $scope.boldnew = 500;
      $scope.boldtre = 600;
      $scope.trianglePosition.set([0.822, 1], {duration: 200, curve: 'easeInOut'});
    };


    //box controls
    $scope.tagOriginX = new Transitionable([0.06]);
    $scope.tagIconOpacity =new Transitionable([0]);
    $scope.tagshowing = false;

    $scope.showTag = function () {
      if ( $scope.tagshowing === false){
      $scope.tagOriginX.set([1], {duration: 130, curve: 'easeInOut'},function() {
       $scope.tagshowing = true; 
      });
      $scope.tagIconOpacity.set([1], {duration: 130, curve: 'linear'});
      }
    };
    $scope.hideTag = function () {
      if ( $scope.tagshowing === true){
      $scope.tagOriginX.set([0.06], {duration: 130, curve: 'easeInOut'},function() {
        $scope.tagshowing = false;
      });
      $scope.tagIconOpacity.set([0], {duration: 130, curve: 'linear'});
      }
    };

  })
 .controller('meme', function($scope, $famous, $state, $rootScope) {

    var Transitionable = $famous['famous/transitions/Transitionable'];

    var EventHandler = $famous['famous/core/EventHandler'];
    //Pending: prev and next arrows need to be dependent
    
    var SpringTransition = $famous['famous/transitions/SpringTransition'];
    Transitionable.registerMethod('spring', SpringTransition);



    $rootScope.btnbg.set([0.24, 0], {duration: 200, curve: 'easeInOut'});
    $rootScope.discovercolor = "#065163";
    $rootScope.memecolor = "#fff";
    $rootScope.catalogcolor = "#065163";

    
    $scope.ttobtn = '/images/makeAssets/tto.png';
    $scope.ttobtncheck = false; 

    $scope.ttobtnon = function(){
     if($scope.ttobtncheck === false){
      $scope.ttobtn = '/images/makeAssets/tto-hover.png';
      $scope.ttobtncheck = true;
     }

    }

    $scope.ttobtnoff = function(){
     if($scope.ttobtncheck === true){
      $scope.ttobtn = '/images/makeAssets/tto.png';
      $scope.ttobtncheck = false;
     }

    }

     $scope.btobtn = '/images/makeAssets/bto.png';
    $scope.btobtncheck = false; 

    $scope.btobtnon = function(){
     if($scope.btobtncheck === false){
      $scope.btobtn = '/images/makeAssets/bto-hover.png';
      $scope.btobtncheck = true;
     }

    }

    $scope.btobtnoff = function(){
     if($scope.btobtncheck === true){
      $scope.btobtn = '/images/makeAssets/bto.png';
      $scope.btobtncheck = false;
     }

    }

    $scope.btbtn = '/images/makeAssets/bt.png';
    $scope.btbtncheck = false; 

    $scope.btbtnon = function(){
     if($scope.btbtncheck === false){
      $scope.btbtn = '/images/makeAssets/bt-hover.png';
      $scope.btbtncheck = true;
     }

    }

    $scope.btbtnoff = function(){
     if($scope.btbtncheck === true){
      $scope.btbtn = '/images/makeAssets/bt.png';
      $scope.btbtncheck = false;
     }

    }

    $scope.ntbtn = '/images/makeAssets/nt.png';
    $scope.ntbtncheck = false; 

    $scope.ntbtnon = function(){
     if($scope.ntbtncheck === false){
      $scope.ntbtn = '/images/makeAssets/nt-hover.png';
      $scope.ntbtncheck = true;
     }

    }

    $scope.ntbtnoff = function(){
     if($scope.ntbtncheck === true){
      $scope.ntbtn = '/images/makeAssets/nt.png';
      $scope.ntbtncheck = false;
     }

    }       

 $scope.text = 'hello';

 $scope.loger = function (text) {
  if (text.length <= 19) {return;}
  else if (text.length){}
 }

  })
.controller('catalog', function($scope, $famous,$q, $state, $rootScope) {

  var Transitionable = $famous['famous/transitions/Transitionable'];
  $rootScope.btnbg.set([0.353, 0], {duration: 200, curve: 'easeInOut'});
  
  $rootScope.discovercolor = "#065163";
    $rootScope.memecolor = "#065163";
    $rootScope.catalogcolor = "#fff";

    $scope.trianglePosition = new Transitionable([0.14, 1]);
   $scope.boldnew = 600;
   $scope.boldpop = 500;
   $scope.boldtre = 500;

    $scope.filterNewest =function () {
      $scope.boldpop = 500;
      $scope.boldtre = 500;
      $scope.boldnew = 600;
      $scope.trianglePosition.set([0.14, 1], {duration: 200, curve: 'easeInOut'}); 
    };

    $scope.filterPopular =function () {
      $scope.boldtre = 500;
      $scope.boldnew = 500;
      $scope.boldpop = 600;
      $scope.trianglePosition.set([0.48, 1], {duration: 200, curve: 'easeInOut'});
    };

    $scope.filterTrending =function () {
      $scope.boldpop = 500;
      $scope.boldnew = 500;
      $scope.boldtre = 600;
      $scope.trianglePosition.set([0.822, 1], {duration: 200, curve: 'easeInOut'});
    };
  })

.controller('login', function($scope, $famous, simpleLogin, $location) {


    $scope.email = null;
    $scope.pass = null;
    $scope.confirm = null;
    $scope.createMode = false;

    $scope.login = function(email, pass) {
      $scope.err = null;
      if(assertValidAccountProps(email,pass,confirm)){
      simpleLogin.login(email, pass)
        .then(function(/* user */) {

          $location.path('/account');
        }, function(err) {
          $scope.err = errMessage(err);
        });
      }  
    };

    $scope.createAccount = function(email,pass,confirm) {
      $scope.err = null;
        if(assertValidAccountProps(email,pass,confirm)){
        simpleLogin.createAccount(email,pass)
          .then(function(/* user */) {
            $location.path('/account');
          }, function(err) {
            $scope.err = errMessage(err);
          });
        }
    };

    function assertValidAccountProps(email,pass,confirm) {
      if( !email ) {
        $scope.err = 'Please enter an email address';
      }
      else if( !pass || !confirm ) {
        $scope.err = 'Please enter a password';
      }
      else if( $scope.createMode && pass !== confirm ) {
        $scope.err = 'Passwords do not match';
      }
      return !$scope.err;
    }

    function errMessage(err) {
      return angular.isObject(err) && err.code? err.code : err + '';
    }
 
  })
.controller('account', function($scope, simpleLogin, fbutil, user, $location) {

   // create a 3-way binding with the user profile object in Firebase
      if (user) {
      var profile = fbutil.syncObject(['users', user.uid]);
      profile.$bindTo($scope, 'profile');
      } 
      // expose logout function to scope
      $scope.logout = function() {
        profile.$destroy();
        simpleLogin.logout();
        $location.path('/login');
      };

      $scope.changePassword = function(pass, confirm, newPass) {
        resetMessages();
        if( !pass || !confirm || !newPass ) {
          $scope.err = 'Please fill in all password fields';
        }
        else if( newPass !== confirm ) {
          $scope.err = 'New pass and confirm do not match';
        }
        else {
          simpleLogin.changePassword(profile.email, pass, newPass)
            .then(function() {
              $scope.msg = 'Password changed';
            }, function(err) {
              $scope.err = err;
            })
        }
      };

      $scope.clear = resetMessages;

      $scope.changeEmail = function(pass, newEmail) {
        resetMessages();
        var oldEmail = profile.email;
        profile.$destroy();
        simpleLogin.changeEmail(pass, oldEmail, newEmail)
          .then(function(user) {
            profile = fbutil.syncObject(['users', user.uid]);
            profile.$bindTo($scope, 'profile');
            $scope.emailmsg = 'Email changed';
          }, function(err) {
            $scope.emailerr = err;
          });
      };

      function resetMessages() {
        $scope.err = null;
        $scope.msg = null;
        $scope.emailerr = null;
        $scope.emailmsg = null;
      }
 
  })
.directive('contenteditable', ['$timeout', function($timeout) { return {
    scope:true,
    controller: 'meme',
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, element, attrs, ngModel) {
      // don't do anything unless this is actually bound to a model
      if (!ngModel) {
        return
      }

      // options
      var opts = {}
      angular.forEach([
        'stripBr',
        'noLineBreaks',
        'selectNonEditable',
        'moveCaretToEndOnChange',
      ], function(opt) {
        var o = attrs[opt]
        opts[opt] = o && o !== 'false'
      })

      // view -> model
      element.bind('input', function(e) {
        scope.$apply(function() {
          var html, html2, rerender
          html = element.html()
          rerender = false
          if (opts.stripBr) {
            html = html.replace(/<br>$/, '')
          }
          if (opts.noLineBreaks) {
            html2 = html.replace(/<div>/g, '').replace(/<br>/g, '').replace(/<\/div>/g, '')
            if (html2 !== html) {
              rerender = true
              html = html2
            }
          }
          ngModel.$setViewValue(html)
          if (rerender) {
            ngModel.$render()
          }
          if (html === '') {
            // the cursor disappears if the contents is empty
            // so we need to refocus
            $timeout(function(){
              element[0].blur()
              element[0].focus()
            })
          }
        })
      })

      // model -> view
      var oldRender = ngModel.$render
      ngModel.$render = function() {
        var el, el2, range, sel
        if (!!oldRender) {
          oldRender()
        }
        element.html(ngModel.$viewValue || '')
        if (opts.moveCaretToEndOnChange) {
          el = element[0]
          range = document.createRange()
          sel = window.getSelection()
          if (el.childNodes.length > 0) {
            el2 = el.childNodes[el.childNodes.length - 1]
            range.setStartAfter(el2)
          } else  {
            range.setStartAfter(el)
          }
          range.collapse(true)
          sel.removeAllRanges()
          sel.addRange(range)
        }
      }
      if (opts.selectNonEditable) {
        element.bind('click', function(e) {
          var range, sel, target
          target = e.toElement
          if (target !== this && angular.element(target).attr('contenteditable') === 'false') {
            range = document.createRange()
            sel = window.getSelection()
            range.setStartBefore(target)
            range.setEndAfter(target)
            sel.removeAllRanges()
            sel.addRange(range)
          }
        })
      }
    }
  }}]);



