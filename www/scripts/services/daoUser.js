app.service('daoUser', function($location, $http, REST) {
  //loggedIn is used in a view and must therefore be either an object
  //or an array to be automatically updated
  var loggedIn = {};
  loggedIn.value = false;
  if ('userRole' in localStorage) {
    loggedIn.value = true;
  }
  if ('userAuth' in localStorage) {
    $http.defaults.headers.common.Authorization = localStorage.userAuth;
  }

  this.getLoggedIn = function() {
    return loggedIn;
  };

  this.getRole = function() {
    return localStorage.userRole;
  };

  this.login = function(username, password, successCallback, errorCallback) {
    var words = CryptoJS.enc.Utf8.parse(username + ":" + password);
    var base64 = CryptoJS.enc.Base64.stringify(words);
    localStorage.userAuth = 'Basic ' + base64;
    $http.defaults.headers.common.Authorization = localStorage.userAuth;

    $http.get(REST.path + 'accounts').success(function(result) {
      localStorage.userRole = result;
      loggedIn.value = true;
      if (typeof (successCallback) == 'function') {
        successCallback();
      }
      $location.path("/");

    }).error(function(result) {
      if (typeof (errorCallback) == 'function') {
        errorCallback();
      }
    });
  };

  this.logout = function() {
    //delete all local data when logout
    localStorage.clear();
    delete $http.defaults.headers.common.Authorization;
    loggedIn.value = false;
    $location.path("/login");
  };
});