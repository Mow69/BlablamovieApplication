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

// quand le document est chargé,ça lui affecte init, soit j'initialise la fonction onload en lui affectant init. Onload est une fonction qui est un attribut de window

window.onload = init;

function init() {
    showPage1();
    callApi('GET', 'http://localhost:8000/movies', function(response){
        console.log(response);

        let currentDiv = document.getElementById('page-1');
        response['Search'].forEach(function (item){
            let newDiv = document.createElement("div");
            let newContent = document.createTextNode(item['Title']);
            newDiv.appendChild(newContent);
            let img = new Image();
            img.src = item['Poster'];
            newDiv.appendChild(img);
            currentDiv.append(newDiv);
        });
    });
}

function callApi(type, url, callback) {
    let http = new XMLHttpRequest();
    http.open(type, url, true);

    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function() {//Call a function when the state changes.
        //if(http.readyState === 4 && http.status === 200) {
            //console.log(http.responseText);
            if(http.readyState === 4){
                callback(JSON.parse(http.response));
            }
        //}
    };
    http.send();
}




// TODO: REFACTORISER CETTE PARTIE
//  (penser qu'il est possible en JS d'écouter du html, afin de créer une méthode
//  de refacto dynamique des pages et de la valeur du display)



// let pageArray = [0, 1, 2, 3, 4, 5];
//
// let titleArray = ['Landing page', 'Movies page', 'Votes page', 'Profil page', 'Settings page', 'About us']
//
// const Router = {
//     page: pageArray,
//     title: titleArray,
//     styleDisplay : "",
// };
//
// function goTo(page) {
//     Router.page = page;
//     switch (page) {
//         case 0:
//             Router.title = '#page-1';
//             styleDisplay = "";
//             console.log();
//             break;
//
//         case 1:
//             Router.title = '#page-2';
//             styleDisplay = "";
//             console.log();
//
//             break;
//         case 2:
//             Router.title = '#page-3';
//             styleDisplay = "";
//             console.log();
//
//
//             break;
//         case 3:
//             Router.title = '#page-4';
//             styleDisplay = "";
//             console.log();
//
//             break;
//         case 4:
//             Router.title = '#page-5';
//             styleDisplay = "";
//             console.log();
//
//             break;
//         case 5:
//             Router.title = '#page-6';
//             styleDisplay = "";
//             console.log();
//
//             break;
//         default:
//             throw "Page not found"
//     }
// }
//
// function renderTitle() {
//     document.querySelector('#title').innerHTML = Router.title
// }
//
// function renderStyleDisplay() {
//     document.querySelector('#styleDisplay').innerHTML = Router.styleDisplay
// }




// function showPage1(page, displayConf)


function showPage1() {
    document.querySelector("#page-1").style.display = "";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "none";
    document.querySelector("#page-4").style.display = "none";
    document.querySelector("#page-5").style.display = "none";
    document.querySelector("#page-6").style.display = "none";

    // let page = document.addEventListener("click", );
    // let displayConf = ;

    // document.getElementById({page}).style.display = {displayConf};
    // let x = document.querySelector(`${page}`).style.display = '${displayConf}';

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