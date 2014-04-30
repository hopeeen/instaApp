
app.service('daoAccounts', function($location, $http, REST, daoUser, Restangular) {

    this.addAccount = function(email, password) {
        //POST
        Restangular.all('accounts').post({username: email, password: password}).then(function(account) {
            status = "POSTED at " + account.getRequestedUrl();
            daoUser.login(email, password, function() {
            }, function() {
            });
        }, function(response) {
            status = ("Error with status code " + response.status);
        });

    };


    this.update = function(name, email, description, password) {
        Restangular.all('accounts').getList().then(function(accounts) {
            var info = accounts;
        }, function(response) {
            status = ("Error with status code " + response.status);
        });


    }

});