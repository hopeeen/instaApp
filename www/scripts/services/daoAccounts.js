 
app.service('daoAccounts', function($location, $http, REST, Restangular) {
 
    Restangular.all('accounts').getList().then(function(accounts) {
        accounts = accounts;
    }, function(response) {
        status = ("Error with status code " + response.status);
    });
   
    this.addAccount = function(email, password) {
        //POST
        Restangular.all('accounts').post({username: email, password: password}).then(function(account) {
            console.log(email + " " + password)
            status = "POSTED at " + account.getRequestedUrl();
            accounts.push(account);
        }, function(response) {
            status = ("Error with status code " + response.status);
        });
 
    };
 
});