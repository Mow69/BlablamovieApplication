//
// /////////////////// https://codingislove.com/implementing-single-page-architecture-with-vanilla-javascript/
//
// // quand le document est chargé,ça lui affecte init, soit j'initialise la fonction onload en lui affectant init. Onload est une fonction qui est un attribut de window
//
// window.onload = init;
//
// function init() {
//
// //////////MOVIE PAGE / Films
//     callApi('GET', 'http://localhost:8000/movies', function(response){
//         console.log(response);
//
//         let movieArea = document.getElementById('movies-area');
//         response['Search'].forEach(function (item){
//             let movieItem = document.createElement("div");
//             movieItem.classList.add('movie_item');
//             movieArea.append(movieItem);
//
//             let poster = new Image();
//             poster.src = item['Poster'];
//             poster.classList.add('poster');
//             movieItem.appendChild(poster);
//
//             // let newContent = document.createTextNode(item['Title']);
//             let movieTitle = document.createElement('p');
//             movieTitle.innerHTML = item['Title'];
//             movieItem.appendChild(movieTitle);
//
//             // TODO : préciser le lien pour les titres des films
//             let movieInfos = document.createElement('a');
//             movieInfos.setAttribute('href', '');
//             movieInfos.classList.add('btn');
//             movieItem.appendChild(movieInfos);
//
//         });
//     });
//
//     ////////ADD USER PAGE
//     try {
//         callApi('POST', 'http://localhost:8000/users/add', function (response) {
//             console.log(response);
//         });
//     } catch (e) {
//         throw ('La requête n\'a pas pu aboutir ' + (e))
//     }
//
//
//     //////////LOGGOUT PAGE
//     try {
//         callApi('GET', 'http://localhost:8000/logout', function (response) {
//             console.log(response);
//         });
//     } catch (e) {
//         throw ('La requête n\'a pas pu aboutir' + (e))
//     }
//
//         //////////DELETE VOTE PAGE
//     try {
//         callApi('DELETE', 'http://localhost:8000/movies/vote-delete', function (response) {
//             console.log(response);
//
//             let movieArea = document.getElementById('movies-area');
//             response['Search'].forEach(function (item){
//                 let movieItem = document.createElement("div");
//                 movieItem.classList.add('movie_item');
//                 movieArea.append(movieItem);
//
//                 let poster = new Image();
//                 poster.src = item['Poster'];
//                 poster.classList.add('poster');
//                 movieItem.appendChild(poster);
//
//                 // let newContent = document.createTextNode(item['Title']);
//                 let movieTitle = document.createElement('p');
//                 movieTitle.innerHTML = item['Title'];
//                 movieItem.appendChild(movieTitle);
//
//                 // TODO : préciser le lien pour les titres des films
//                 let movieInfos = document.createElement('a');
//                 movieInfos.setAttribute('href', '');
//                 movieInfos.classList.add('btn');
//                 movieItem.appendChild(movieInfos);
//
//             });
//
//         });
//     } catch (e) {
//         throw ('La requête n\'a pas pu aboutir' + (e))
//     }
//
//     //////////VOTED MOVIES PAGE / Historique (des votes)
//     try {
//         callApi('POST', 'http://localhost:8000/movies/vote', function (response) {
//             console.log('ma reponse accueil', response);
//         });
//     } catch (e) {
//         throw ('La requête n\'a pas pu aboutir' + (e))
//     }
//
//     ////////LOGIN PAGE
//
//     function userConnect() {
//         let movieArea = document.getElementById('movies-area');
//         let connexionForm = document.getElementById('connexionForm');
//         connexionForm.addEventListener('submit', () => {
//             alert("Le formulaire a été envoyé");
//             try {
//                 callApi('POST', 'http://localhost:8000/login', function (response) {
//                     console.log(response);
//                     movieArea.innerHTML = response;
//                 });
//             } catch (e) {
//                 throw ('La requête n\'a pas pu aboutir ' + (e))
//             }
//         });
//     }
// }
//
// // Methode pour appeler BlablamovieAPi
//     /**
//      *
//      * @param type
//      * @param url
//      * @param callback
//      */
//     function callApi(type, url, callback) {
//         let http = new XMLHttpRequest();
//         http.open(type, url, true);
//
//         http.setRequestHeader('Content-type', 'application/json');
//
//         http.onreadystatechange = function() {//Call a function when the state changes.
//             //if(http.readyState === 4 && http.status === 200) {
//             //console.log(http.responseText);
//             if(http.readyState === 4){
//                 callback(JSON.parse(http.response));
//             }
//             //}
//         };
//         http.send();
// }
//
//
// //////// PAGE
// try {
//     /**
//      *
//      * @param pageNum
//      */
//     function showPage(pageNum) {
//
//         document.addEventListener("click", () => {
//             let pageList = document.getElementsByClassName(`page`);
//             for (let page of pageList) {
//                 page.style.display = 'none'
//             }
//
//             let pageToDisplay = document.getElementById(`page-${pageNum}`);
//             let home = document.getElementById(`home`);
//             pageToDisplay.style.display = "flex";
//             home.style.display = "none";
//         });
//     }
// } catch (e) {
//     throw (e)
// }
//
//
//
//
