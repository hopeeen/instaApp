window.onload = function () {
 
    var slideMenuButton = document.getElementById('slide-menu-button');
    slideMenuButton.onclick = function (e) {
        var cl = document.body.classList;
        if (cl.contains('left-nav')) {
            cl.remove('left-nav');
        } else {
            cl.add('left-nav');
        }
    };
    
    var slideMenuItem = document.getElementById('slideMenu');
    var clst = document.body.classList;
    slideMenuItem.onclick = function (e) {
        if (clst.contains('left-nav')) {   
            clst.remove('left-nav');
        }
    };
 
};