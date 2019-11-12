
/////////////////// https://codingislove.com/implementing-single-page-architecture-with-vanilla-javascript/

// quand le document est chargé,ça lui affecte init, soit j'initialise la fonction onload en lui affectant init. Onload est une fonction qui est un attribut de window

window.onload = init;

function init() {

    userConnect();
    listFilm();
}

// Methode pour appeler BlablamovieAPi
/**
 *
 * @param type
 * @param url
 * @param callback
 * @param data
 */
function callApi(type, url, callback, data) {
    let http = new XMLHttpRequest();
    http.open(type, url, true);

    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function() {//Call a function when the state changes.
        //if(http.readyState === 4 && http.status === 200) {
        //console.log(http.responseText);
        if(http.readyState === 4){
            if(http.status === 200) {

                callback(http.response);

            } else {

                console.log('caca prout');

            }
        }
        //}
    };
    http.send(data);
}

////////LOGIN PAGE

function userConnect() {
    let movieArea = document.getElementById('movies-area');
    let connexionForm = document.getElementById('connexionForm');

    connexionForm.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log('coucou');

        try {
            callApi('POST', 'http://localhost:8000/login', function (response) {
                console.log(response);
                movieArea.innerHTML = response;
            }, JSON.stringify({
                mail: document.querySelector('#mail-connexion').value,
                password: document.querySelector('#password-connexion').value
            }));
        } catch (e) {
            throw (e);
        }
    });
}



////////ADD USER PAGE

function userAdd() {
    let movieArea = document.getElementById('movies-area');
    let inscriptionForm = document.getElementById('inscriptionForm');

    inscriptionForm.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log('coucou');

        try {
            callApi('POST', 'http://localhost:8000/users/add', function (response) {
                console.log(response);
                movieArea.innerHTML = response;
            }, JSON.stringify({
                login: document.querySelector('#login-inscription').value,
                mail: document.querySelector('#mail-inscription').value,
                password: document.querySelector('#password-inscription').value,
                birth_date: document.querySelector('#birth_date-inscription').value
            }));
        } catch (e) {
            throw (e);
        }
    });
}


// TODO: Ajouter des indicateurs : pour signifié que le formulaire d'inscription et de connexion a été envoyé.
//   TODO:  Des indicateurs de statut connecté pour le user
// TODO: un bouton de déconnexion et la fonctionnalité de loggout
// TODO: empécher un visiteur non connecté de voir les films, ni même de voir le lien dans la navbar et la footbar
// TODO: ajouter dans le back (API) la fonctionnalité de faire une requête de full plot pour chaque film cliqué.
