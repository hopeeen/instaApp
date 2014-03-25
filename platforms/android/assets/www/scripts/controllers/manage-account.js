var app = angular.module('appen', []);
app.controller('MainCtrl', function($scope, sharedProperties) {
  $scope.name = 'Petter Lundemo';
  $scope.email = 'petter_lundemo@hotmail.com';
  $scope.description = '';
  $scope.showname = true;
  $scope.showemail = true;
  $scope.showdesc = true;
  $scope.shownewp = true;
  $scope.testtest = function(){
      
    alert($scope.testen);  
  
  };
  
  
  $scope.go = function(item) {
    sharedProperties.setListName(item);
    
    
  }
  
  $scope.delete = function(){
  var yn = confirm("Are you sure you want to delete your account?");
  if(yn === true){
      alert("Yes");
  } else {
      alert("No");
  }
      
  
  }
  
  $scope.getItem = function() {
    
    $scope.msg = sharedProperties.getListName();
  }
  
  $scope.pushbutton = function(){
      
      var error = false;
      
      $scope.name = $scope.validate($scope.name);
      $scope.email = $scope.validate($scope.email);
      $scope.description = $scope.validate($scope.description)
      
      var newpassword = $scope.newpassword;
      var oldpassword = $scope.oldpassword;
      alert("Funka");
      
      
      
  }
  
  $scope.validate = function(variable){
      var cleanString = variable.replace('[^\w\s\-\+]', '');
      return cleanString;
  }
});

app.service('sharedProperties', function () {
    var list_name = '';
  
    return {
  
        getListName: function() {
            return list_name;
        },
        setListName: function(name) {
            list_name = name;
        }
    };
    
   
});
   