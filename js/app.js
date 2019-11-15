
/////////////////// https://codingislove.com/implementing-single-page-architecture-with-vanilla-javascript/

// quand le document est chargé,ça lui affecte init, soit j'initialise la fonction onload en lui affectant init. Onload est une fonction qui est un attribut de window

window.onload = init;

function init() {
    window.addEventListener('hashchange', (e) => {
        const hash = e.newURL.split('#')[1];
        switch(hash) {
            case 'home':
                showPage(1);
                break;
            case 'apropos':
                showPage(6);
                break;
            case 'films':
                listFilm();
                showPage(2);
                break;
            case 'historique':
                showPage(3);
                break;
            case 'contact':
                showPage(8);
                break;
            case 'inscription':
                showPage(5);
                break;
            case 'connexion':
                showPage(4);
                break;
            case 'home-co':
                showPage(7);
                break;
            default:
                showPage(10);
                break
        }
    });
    userAdd();
    userConnect();
    showPage(1);

    document.querySelector('#btn-login').addEventListener('click', userConnect);

    // PENSER A SUPPRIER LA LIGNE SUIVANTE POUR CONSERVER LE TOKEN DANS LE LOCAL STORAGE (cad pour rester connecté au refresh page)
    localStorage.removeItem('auth-token');
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
        if(this.readyState === 4){
            if(this.status === 200) {

                // callback(JSON.parse(this.responseText));
                callback(this.responseText);


            } else {

                console.log('callApi return false');

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
        event.preventDefault();

        //if(verifFormConnexion(f)) {
            try {
                callApi('POST', 'http://localhost:8000/auth-tokens', function (response) {
                    console.log(response);
                    //movieArea.innerHTML = response;
                    localStorage.setItem('auth-token', JSON.stringify(response));
                    //JSON.parse(localStorage.getItem('auth-token'));
                    console.log('connexion ok');
                }, JSON.stringify({
                    login: document.querySelector('#mail-connexion').value,
                    password: document.querySelector('#password-connexion').value
                }));

                showPage(1);

            } catch (e) {
                throw new Error(e + alert("Une erreur de saisie dans le formulaire a été détectée et celui-ci n'a pas pu être envoyé."));
            }
        //}
    });
}



////////ADD USER PAGE

function userAdd() {
    let movieArea = document.getElementById('movies-area');
    let inscriptionForm = document.getElementById('inscriptionForm');

    inscriptionForm.addEventListener('submit', (event) => {
        event.preventDefault()
        // if(verifFormInscription(f)) {
            try {
                callApi('POST', 'http://localhost:8000/users', function (response) {
                    console.log(response);
                    movieArea.innerHTML = response;
                }, JSON.stringify({
                    login: document.querySelector('#login-inscription').value,
                    mail: document.querySelector('#mail-inscription').value,
                    password: document.querySelector('#password-inscription').value,
                    birth_date: document.querySelector('#birth_date-inscription').value
                }));
                console.log('inscription ok');
                showPage(1);

                showPopupInscription(true)

            } catch (e) {
                throw new Error(e + alert("Une erreur de saisie dans le formulaire a été détectée et celui-ci n'a pas pu être envoyé."));
            }

        // }


    });
}

function showPopupInscription(show) {
    $popup = document.querySelector('#popup-inscription')

    if (show) {
        if (!$popup.classList.contains('popup-active')) {
            $popup.classList.add('popup-active')
        }
    } else {
        $popup.classList.remove('popup-active')
    }
}


// TODO: Ajouter des indicateurs : pour signifié que le formulaire d'inscription et de connexion a été envoyé.
//   TODO:  Des indicateurs de statut connecté pour le user
// TODO: un bouton de déconnexion et la fonctionnalité de loggout
// TODO: empécher un visiteur non connecté de voir les films, ni même de voir le lien dans la navbar et la footbar
// TODO: ajouter dans le back (API) la fonctionnalité de faire une requête de full plot pour chaque film cliqué.
