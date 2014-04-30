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
    
localStorage.password = password;
      

      
$http.get(REST.path + 'accounts?where=username=="' + localStorage.username + '"').success(function(result) {
    
    localStorage.password = password;
      var mid = JSON.stringify(result._items[0]._id).replace('"', '');
      var mid2 = mid.replace('"', '');
      
localStorage.accid = mid2.trim();
    }).error(function(result) {

    });
      
      
      
      
      
      
$http.get(REST.path + 'users?where=user=="' + localStorage.username + '"').success(function(result) {

      var mid = JSON.stringify(result._items[0]._id).replace('"', '');
      var mid2 = mid.replace('"', '');
      
localStorage.id = mid2.trim();
alert(localStorage.id + " er nå min id");
var mid = JSON.stringify(result._items[0].firstname).replace('"', '');
var mid2 = mid.replace('"', '');
localStorage.firstname = mid2.trim();
var mid = JSON.stringify(result._items[0].lastname).replace('"', '');
var mid2 = mid.replace('"', '');
localStorage.lastname = mid2.trim();
var mid = JSON.stringify(result._items[0].description).replace('"', '');
var mid2 = mid.replace('"', '');
localStorage.description = mid2.trim();
     
     
    }).error(function(result) {

    });
      
      
      alert(localStorage.id + " - " + localStorage.description + " - " + localStorage.username);
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
  
  
  


  
this.update = function(name, email, description, newpassword, oldpassword) {
    alert("Hei" + localStorage.accid + " - " + localStorage.password);
if(oldpassword === "l"){
    alert("Logger ut");
    this.logout();
}


var loggut = 0;


var newuser = {};
alert("Pass:" + localStorage.password);
if(newpassword.length > 5 && oldpassword === varpass){
loggut = 1;
varpass = newpassword;
alert("varpass");
newuser = {username: email, password: varpass};
} else {
    newuser = {username: email};
}



            
            
            
        /*
           $http.put(REST.path + 'accounts/' + localStorage.accid, JSON.stringify(newuser)).success(function(result2) {
        alert("Passord og epost byttet");
      if (typeof (successCallback) == 'function') {
        
            successCallback();
        
      }
      
     
    }).error(function(result2) {
      if (typeof (errorCallback) == 'function') {
        
        errorCallback();
      }
    });
*/
    
    
        



var all = name.split(" ");
var lastname = all[all.length-1];
var firstname = "";
for(a = 0; a < all.length-1; a++){
    firstname = firstname + " " + all[a];
}

var newuser = {description: description, firstname: firstname, lastname: lastname};
    $http.put(REST.path + 'users/' + localStorage.id, JSON.stringify(newuser)).success(function(result2) {
        localStorage.description = description;
        localStorage.firstname = firstname;
        localStorage.lastname = lastname;
      alert("Lagret!");
      if (typeof (successCallback) == 'function') {
        
            successCallback();
        
      }
      
     
    }).error(function(result2) {
      if (typeof (errorCallback) == 'function') {
        
        errorCallback();
      }
    });




     
    



    
    /*
    alert("Kom hit - " + localStorage.id + " - " + localStorage.username);
$http.get(REST.path + 'users?where=user=="' + localStorage.username + '"').success(function(result) {
      
      alert(JSON.stringify(result));
      

     
    }).error(function(result) {

    });
    
    */
    
    
    
    
    
    
    
    
}
  
  
  
  
  
  
});
