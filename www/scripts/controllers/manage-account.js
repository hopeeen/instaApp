
app.controller('manageAccountCTRL', function($scope) {
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
  
  
  
  $scope.delete = function(){
  var yn = confirm("Are you sure you want to delete your account?");
  if(yn === true){
      alert("Yes");
  } else {
      alert("No");
  }
      
  
  }
  
  
  $scope.pushbutton = function(){
      
      var error = false;
      var errors = new Array();
      $scope.name = $scope.validate($scope.name);
      $scope.email = $scope.validate($scope.email);
      $scope.description = $scope.validate($scope.description);
      
      var newpassword = $scope.newpassword;
      var oldpassword = $scope.oldpassword;
      alert($scope.validate($scope.name));
      
      
      
      
      
  }
  
  $scope.validate = function(variable){
      var cleanString = variable.replace('[^\w\s\-\+]', '');
      return cleanString;
  }
});

   