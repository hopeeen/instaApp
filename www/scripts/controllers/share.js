
app.controller('DemoCTRL', function($scope) {
$scope.test = "Petter";
 
 
$('#twitter').sharrre({
  share: {
    twitter: true
  },
  template: '<a class="box"><div class="count">{total}</div><div class="share"><span></span>Tweet</div></a>',
  enableHover: false,
  enableTracking: true,
  buttons: { twitter: {via: '_JulienH'}},
  click: function(api, options){
    api.simulateClick();
    api.openPopup('twitter');
  }
});
$('#facebook').sharrre({
  share: {
    facebook: true
  },
  template: '<a class="box"><div class="count">{total}</div><div class="share"><span></span>Like</div></a>',
  enableHover: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('facebook');
  }
});
$('#googleplus').sharrre({
  share: {
    googlePlus: true
  },
  template: '<a class="box"><div class="count">{total}</div><div class="share"><span></span>Google+</div></a>',
  enableHover: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('googlePlus');
  }
});
 
});
 
 
 
 
 
 