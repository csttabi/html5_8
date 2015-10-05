// Fő angular module
var cipobolt = angular.module("cipobolt", []);

cipobolt.controller("termekCtrl", ["$http", "$scope", function ($http, $scope) {

    // Termékek listája
    $scope.termekek = [];

    // Termékek lekérése
    $http.get("js/json/termekek.json")
        .success(function (d) {
            $scope.termekek = d;
        })
        .error(function (d) {
            console.error("Error: ", d);
        });

    changeTheme();
}]);



// Téma módosítása

function changeTheme() {
    $("#theme-selector a").click(function (e) {

        // Esemény megálítása
        e.preventDefault();

        // A kiválasztott link url-je.
        var theme = this.href.replace(location.origin, "").replace(/\//g, "");


        // Fő css link keresése és cseréje
        //lib/bootswatch/cerulean/bootstrap.css

        var mainCss = $("#main-css");
        var href = $("#main-css").attr("href");
        href = href.replace(/bootswatch\/.*\/bootstrap/, "bootswatch/" + theme + "/bootstrap");

        mainCss.attr("href", href);


    });

}