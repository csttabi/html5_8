// Fő angular module
var cipobolt = angular.module("cipobolt",[]);

cipobolt.controller("termekCtrl", function($scope){
    
    // Termékek listája
    $scope.termekek = [
        {"name": "Piros cipő", "price": "11000", "img": "http://keptaram.hu/kt/7/3451/rAPGoCGpduvPbCxVKPvn/piros-szaten-cipo.jpg"},
        {"name": "Zöld cipő", "price": "11000", "img": "http://keptaram.hu/kt/7/3451/rAPGoCGpduvPbCxVKPvn/piros-szaten-cipo.jpg"},
        {"name": "Kék cipő", "price": "11000", "img": "http://keptaram.hu/kt/7/3451/rAPGoCGpduvPbCxVKPvn/piros-szaten-cipo.jpg"},
        {"name": "Fekete cipő", "price": "11000", "img": "http://keptaram.hu/kt/7/3451/rAPGoCGpduvPbCxVKPvn/piros-szaten-cipo.jpg"}
    ];
});



// Téma módosítása
$("#theme-selector a").click(function(e){
    
    // Esemény megálítása
    e.preventDefault();
    
    // A kiválasztott link url-je.
    var theme = this.href.replace(location.origin, "").replace(/\//g,"");
    
    
    // Fő css link keresése és cseréje
    //lib/bootswatch/cerulean/bootstrap.css
    
    var mainCss = $("#main-css");
    var href = $("#main-css").attr("href");
    href = href.replace(/bootswatch\/.*\/bootstrap/, "bootswatch/"+ theme +"/bootstrap");
    
    mainCss.attr("href",href);
    
    
});