app.service('daoUser', function($location, $http, REST, Restangular) {
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
    localStorage.username = username;

      
      
$http.get(REST.path + 'users?where=user=="' + localStorage.username + '"').success(function(result) {

      var mid = JSON.stringify(result._items[0]._id).replace('"', '');
      var mid2 = mid.replace('"', '');
      
localStorage.id = mid2.trim();
var mid = JSON.stringify(result._items[0].firstname).replace('"', '');
var mid2 = mid.replace('"', '');
localStorage.firstname = mid2.trim();
var mid = JSON.stringify(result._items[0].lastname).replace('"', '');
var mid2 = mid.replace('"', '');
localStorage.firstname = mid2.trim();
var mid = JSON.stringify(result._items[0].description).replace('"', '');
var mid2 = mid.replace('"', '');
localStorage.firstname = mid2.trim();
     
    }).error(function(result) {

    });
      
      
      
    $http.defaults.headers.common.Authorization = localStorage.userAuth;

    $http.get(REST.path + 'auth').success(function(result) {
      localStorage.userRole = result;
      loggedIn.value = true;
      if (typeof (successCallback) == 'function') {
        successCallback();
      }
      $location.path("/mapTest");

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
  
  
  


  
this.update = function(name, email, description, newpassword) {




var newuser = "";
var sync = 0;
 

var newuser = {user: email, description: description};

var all = name.split(" ");
var lastname = all[all.length-1];
var firstname = "";
for(a = 0; a < all.length-1; a++){
    firstname = firstname + " " + all[a];
}
alert(lastname);
alert(firstname);
var newuser = {user: email, description: description, firstname: firstname, lastname: lastname};
    $http.put(REST.path + 'users/' + localStorage.id, JSON.stringify(newuser)).success(function(result2) {
        
      
      if (typeof (successCallback) == 'function') {
        
            successCallback();
        
      }
      
     
    }).error(function(result2) {
      if (typeof (errorCallback) == 'function') {
        
        errorCallback();
      }
    });




     
    

alert(localStorage.id + "er min id");

    
    /*
    alert("Kom hit - " + localStorage.id + " - " + localStorage.username);
$http.get(REST.path + 'users?where=user=="' + localStorage.username + '"').success(function(result) {
      
      alert(JSON.stringify(result));
      

     
    }).error(function(result) {

    });
    
    */
    
    
    
    
    
    
    
    
}
  
  
  
  
  
  
});
