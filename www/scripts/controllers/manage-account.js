
app.controller('manageAccountCTRL', function($scope) {
  $scope.name = 'Petter Lundemo';
  $scope.email = 'petter_lundemo@hotmail.com';
  $scope.description = '';
  $scope.showname = true;
  $scope.showemail = true;
  $scope.showdesc = true;
  $scope.shownewp = true;
  $scope.showdelete = true;
  $scope.showpic = true;
 
 
  
 $scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);

    $http.post('../img/', fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
    

});
 };      
      
  
  
  $scope.delete = function(){
      var pass = $scope.verifypassword;
      if(pass === "password"){
  var yn = confirm("Are you sure you want to delete your account?");
  if(yn === true){
      alert("Yes");
  } else {
      alert("No");
      $scope.verifypassword = '';
  }
      
      } else {
          alert("Wrong password!");
      }
  }
  
  
  $scope.pushbutton = function(){
      
      var error = false;
      var errors = new Array();
      $scope.name = $scope.validate($scope.name);
      //$scope.email = $scope.validate($scope.email);
      $scope.description = $scope.validate($scope.description);
      
      var newpassword = $scope.newpassword;
      var oldpassword = $scope.oldpassword;
      
      var pattern = /[0-9a-zA-Z- ]+/g;
      var emailpattern = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/      
      
      if($scope.name.length < 3){
          error = true;
          errors.push("Name is too short");
      }
      if(pattern.test($scope.name) == false){
         
          error = true;
          errors.push("Name is invalid");
      }
      if(emailpattern.test($scope.email) === false){
          alert("Email feil" + $scope.email);
          error = true;
          errors.push("Invalid email");
      }
      
      
      if(error == false){
          alert("All is good");
      } else {
          alert("All is not good");
      }
      
  $scope.errors = errors;
     
      
  }
  
  $scope.validate = function(variable){
     var pattern = /[^0-9a-zA-Z- ]+/g;
      return variable.replace(pattern, "");
  }
});

   