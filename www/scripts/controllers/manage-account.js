
app.controller('manageAccountCTRL', function($scope, daoUser) {
    $scope.name = localStorage.firstname + " " + localStorage.lastname;
    if ($scope.name === "undefined undefined") {
        $scope.name = "";
    }
    $scope.email = localStorage.username;
    $scope.description = localStorage.description;

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
        alert("Starting upload");
        $http.post('../img/', fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity


        });
        alert("File uploaded!");
    };



    $scope.delete = function() {
        var pass = $scope.verifypassword;
        if (pass === "password") {
            var yn = confirm("Are you sure you want to delete your account?");
            if (yn === true) {
                alert("Yes");
            } else {
                alert("No");
                $scope.verifypassword = '';
            }

        } else {
            alert("Wrong password!");
        }
    }


    $scope.pushbutton = function() {
        var error = false;
        var errors = new Array();
        $scope.name = $scope.validate($scope.name);
        //$scope.email = $scope.validate($scope.email);
        $scope.description = $scope.validate($scope.description);

        var newpassword = $scope.newpassword;
        var oldpassword = $scope.oldpassword;

        var pattern = /[0-9a-zA-Z- ]+/g;
        var emailpattern = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/

        if (error == false) {
            daoUser.update($scope.name, $scope.email, $scope.description, $scope.newpassword, $scope.oldpassword);



            $scope.errors = errors;

            





        } else {
            alert("Error updating user.");
        }
    };


    $scope.validate = function(variable) {
        var pattern = /[^0-9a-zA-Z- ]+/g;
        return variable.replace(pattern, "");
    }
});

   