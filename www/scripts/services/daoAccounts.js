 
app.service('daoAccounts', function($location, $http, REST, Restangular) {
 
    Restangular.all('accounts').getList().then(function(accounts) {
        accounts = accounts;
    }, function(response) {
        status = ("Error with status code " + response.status);
    });
   
    this.addAccount = function(email, password) {
        //POST
        Restangular.all('accounts').post({username: email, password: password}).then(function(account) {
            status = "POSTED at " + account.getRequestedUrl();
            accounts.push(account);
        }, function(response) {
            status = ("Error with status code " + response.status);
        });
 
    };
    
    
    this.update = function(name, email, description, password){
        alert("Hei");
    Restangular.all('accounts').getList().then(function(accounts) {
        var info = accounts;
        alert("Kom inn her");
    }, function(response) {
        status = ("Error with status code " + response.status);
    });
    
    alert(info);
    alert(status);
        
        
    }
 
});