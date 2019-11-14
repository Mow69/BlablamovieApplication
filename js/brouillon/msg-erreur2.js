// // //https://openclassrooms.com/fr/courses/146276-tout-sur-le-javascript/144576-td-verification-dun-formulaire
// //
// function surligne(champ, erreur)
// {
//     if(erreur)
//         champ.style.backgroundColor = "#fba";
//     else
//         champ.style.backgroundColor = "";
// }
// //
// //
// //
// // function verifLogin(champ)
// // {
// //     ////////// REGEX
// //
// //     var regexLogin = /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/;
// //
// //
// // ////////////
// //
// //
// //     if((champ.value.length < 3 || champ.value.length > 17) || (regexLogin.test(champ.value) === false))
// //     {
// //         surligne(champ, true);
// //         console.log("la valeur entrée n'est pas correcte");
// //         return false;
// //     }
// //     else
// //     {
// //         surligne(champ, false);
// //         console.log("la valeur entrée (login) est correcte");
// //         return true;
// //     }
// //
// //
// // }
// //
// // function verifEmail(champ)
// // {
// //
// //     var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
// //
// //
// //
// //     if((champ.value.length < 3 || champ.value.length > 50) || (regexEmail.test(champ.value) === false))
// //         {
// //             surligne(champ, true);
// //             console.log("la valeur entrée (email) n'est pas correcte");
// //             return false;
// //         }
// //         else
// //         {
// //             surligne(champ, false);
// //             console.log("la valeur entrée est correcte");
// //             return true;
// //         }
// //
// //
// // }
// //
// // function verifPassword(champ)
// // {
// //
// //     var regexPassword = /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/;
// //
// //     if((champ.value.length < 3 || champ.value.length > 17) || (regexPassword.test(champ.value) === false))
// //     {
// //         surligne(champ, true);
// //         console.log("la valeur entrée (password) n'est pas correcte");
// //         return false;
// //     }
// //     else
// //     {
// //         surligne(champ, false);
// //         console.log("la valeur entrée est correcte");
// //         return true;
// //     }
// //
// //
// // }
// //
// //
// //
// // Obtenir l’âge : http://www.trucsweb.com/tutoriels/javascript/tw276/
// function twCalculeAge(dNaissance) {
//
//     let nDifferenceEnMilliseconde = Date.now() - dNaissance.getTime();
//     console.log("hello");
//
//     console.log(nDifferenceEnMilliseconde)
//     let dAge = new Date(nDifferenceEnMilliseconde); // Millisecondes
//     console.log(dAge);
//     // LA date UTC renvoie le nombre de millièmes de seconde depuis le 1er janvier 1970 !!
//     console.log(Math.abs(dAge.getUTCFullYear() - 1970))
//     console.log(dNaissance);
//
//     return Math.abs(dAge.getUTCFullYear() - 1970);
// }
//
//
//
// function verifDbDate(champ)
// {
// // let dateDeNaissance = document.querySelector('#birth_date-inscription').value;
//
//     champ = new Date(1989);
//
//     if(twCalculeAge(champ) < 15)
//         {
//         surligne(champ, true);
//         console.log("la valeur entrée (password) n'est pas correcte");
//         return false;
//     }
//     else
//     {
//         surligne(champ, false);
//         console.log("la valeur entrée est correcte");
//         return true;
//     }
//
//
// }
// verifDbDate();
//
//
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // function verifFormConnexion(f)
// // {
// //     let loginOk = verifLogin(f.login);
// //     let emailOk = verifEmail(f.email);
// //     let passwordOk = verifPassword(f.password);
// //
// //     if(loginOk && emailOk && passwordOk)
// //         return true;
// //     else
// //     {
// //         alert("Oops ! Il semblerait que tes identifiants soient incorrects, try again !");
// //             if(loginOk===false)
// //             {
// //                 alert("Pseudo invalide ! Il doit faire entre 3 et 18 caractères et ne contenir que des chiffres et des lettres !")
// //             }
// //             if(emailOk===false)
// //             {
// //                 alert("On dirait que ce mail n'existe pas ! Vérifie qu'il est bien entré !")
// //             }
// //             if(passwordOk===false)
// //             {
// //                 alert("Pseudo : doit faire entre 3 et 18 caractères alphanumériques")
// //             }
// //
// //         return false;
// //     }
// // }
// //
// //
// //
// //
// //
// //
// // function verifFormInscription(f)
// // {
// //     let loginOk = verifLogin(f.login);
// //     let emailOk = verifEmail(f.email);
// //     let passwordOk = verifPassword(f.password);
// //     let dbdateOk = verifDbDate(f.birth_date);
// //
// //
// //     if(loginOk && emailOk && passwordOk && dbdateOk)
// //         return true;
// //     else
// //     {
// //         if(loginOk===false)
// //         {
// //             alert("Pseudo invalide ! Il doit faire entre 3 et 18 caractères et ne contenir que des chiffres et des lettres !");
// //         }
// //         if(emailOk===false)
// //         {
// //             alert("On dirait que ce mail n'existe pas ! Vérifie qu'il est bien entré !");
// //         }
// //         if(passwordOk===false)
// //         {
// //             alert("Pseudo : doit faire entre 3 et 18 caractères alphanumériques");
// //         }
// //         if(dbdateOk===false)
// //         {
// //             alert("Date de naissance invalide ! Tu sembles trop jeune ou beaucoup trop vieux pour t'inscrire sur digiMovie !");
// //         }
// //
// //         return false;
// //     }
// // }
// //
// //
// //
// //
// //
// //
// //
// // //
// // // // Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// // // // le formulaire et le champ d'e-mail ainsi que l'élément span
// // // // dans lequel on placera le message d'erreur
// // //
// // // var form  = document.getElementsByClassName('form-example')[0];
// // // var email = document.getElementById('email');
// // // var password = document.getElementById('password');
// // // var error = document.querySelector('.error');
// // //
// // // email.addEventListener("input", function (event) {
// // //     // Chaque fois que l'utilisateur saisit quelque chose
// // //     // on vérifie la validité du champ e-mail.
// // //     if (email.validity.valid) {
// // //         // S'il y a un message d'erreur affiché et que le champ
// // //         // est valide, on retire l'erreur
// // //         error.innerHTML = ""; // On réinitialise le contenu
// // //         error.className = "error"; // On réinitialise l'état visuel du message
// // //     }
// // // }, false);
// // //
// // // password.addEventListener("input", function (event) {
// // //     // Chaque fois que l'utilisateur saisit quelque chose
// // //     // on vérifie la validité du champ e-mail.
// // //     if (password.validity.valid) {
// // //         // S'il y a un message d'erreur affiché et que le champ
// // //         // est valide, on retire l'erreur
// // //         error.innerHTML = ""; // On réinitialise le contenu
// // //         error.className = "error"; // On réinitialise l'état visuel du message
// // //     }
// // // }, false);
// // //
// // // form.addEventListener("submit", function (event) {
// // //     // Chaque fois que l'utilisateur tente d'envoyer les données
// // //     // on vérifie que le champ email est valide.
// // //     if ((!email.validity.valid) || (!password.validity.valid)) {
// // //
// // //         // S'il est invalide, on affiche un message d'erreur personnalisé
// // //         error.innerHTML = "J'attends une adresse e-mail et/ou un mot de passe correcte(s), mon cher !";
// // //         error.className = "error active";
// // //         // Et on empêche l'envoi des données du formulaire
// // //         event.preventDefault();
// // //     }
// // // }, false);
// // //
// // //
// //
// //
// //
// //
