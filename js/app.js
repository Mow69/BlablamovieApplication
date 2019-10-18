// 'use strict';
//
// (function () {
//     function init() {
//         var router = new Router([
//             new Route('home', 'home.html', true),
//             new Route('movies', 'movies.html', true),
//             new Route('votes', 'votes.html', true),
//             new Route('profil', 'profil.html', true),
//             new Route('settings', 'settings.html', true),
//             new Route('about', 'about.html', true),
//
//
//         ])
//     }
//     init();
// }());

/////////////////// https://codingislove.com/implementing-single-page-architecture-with-vanilla-javascript/

function showPage1() {
    document.querySelector("#page-1").style.display = "";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "none";
    document.querySelector("#page-4").style.display = "none";
    document.querySelector("#page-5").style.display = "none";
    document.querySelector("#page-6").style.display = "none";
}

function showPage2() {
    document.querySelector("#page-1").style.display = "none";
    document.querySelector("#page-2").style.display = "";
    document.querySelector("#page-3").style.display = "none";
    document.querySelector("#page-4").style.display = "none";
    document.querySelector("#page-5").style.display = "none";
    document.querySelector("#page-6").style.display = "none";
}

function showPage3() {
    document.querySelector("#page-1").style.display = "none";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "";
    document.querySelector("#page-4").style.display = "none";
    document.querySelector("#page-5").style.display = "none";
    document.querySelector("#page-6").style.display = "none";
}

function showPage4() {
    document.querySelector("#page-1").style.display = "none";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "none";
    document.querySelector("#page-4").style.display = "";
    document.querySelector("#page-5").style.display = "none";
    document.querySelector("#page-6").style.display = "none";
}

function showPage5() {
    document.querySelector("#page-1").style.display = "none";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "none";
    document.querySelector("#page-4").style.display = "none";
    document.querySelector("#page-5").style.display = "";
    document.querySelector("#page-6").style.display = "none";
}

function showPage6() {
    document.querySelector("#page-1").style.display = "none";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "none";
    document.querySelector("#page-4").style.display = "none";
    document.querySelector("#page-5").style.display = "none";
    document.querySelector("#page-6").style.display = "";
}