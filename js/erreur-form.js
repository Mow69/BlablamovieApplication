//
// // https://www.pierre-giraud.com/javascript-apprendre-coder-cours/validation-formulaire/
//
// var formValid  = document.getElementsByClassName('bouton_envoi');
// var email = document.getElementById('email');
// // var password = document.getElementById('password');
// // var birth_date = document.getElementById('birth_date');
// // var login = document.getElementById('login');
//
//
//
// var missEmail = document.getElementById('missEmail');
// // var missPassword = document.getElementById('missPassword');
// // var missBirth_date = document.getElementById('missBirth_date');
// // var missLogin = document.getElementById('missLogin');
//
// var emailValid = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
// // var passwordValid = /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/;
// // var birth_dateValid = verifDbDate(); /// Retravailler la contrainte de la date de naissance
// // var loginValid = /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/;
//
//
// formValid.addEventListener('submit', validation);
//
// function validation(event) {
//     // Si le champ est vide
//     if (email.validity.valueMissing) {
//         event.preventDefault();
//         missEmail.textContent = 'Email manquant';
//         missEmail.style.color = 'red';
//     } else if (emailValid.test(email.value) === false) {
//         event.preventDefault();
//         missEmail.textContent = 'Format incorrect';
//         missEmail.style.color = 'orange';
//     } else {
//     }
// }
//
//
// // if (password.validity.valueMissing) {
// //     event.preventDefault();
// //     missPassword.textContent = 'Mot de pass manquant';
// //     missPassword.style.color = 'red';
// // }
// // if (birth_date.validity.valueMissing) {
// //     event.preventDefault();
// //     missBirth_date.textContent = 'Date de naissance manquante';
// //     missBirth_date.style.color = 'red';
// // }
// // if (login.validity.valueMissing) {
// //     event.preventDefault();
// //     missLogin.textContent = 'Login manquant';
// //     missLogin.style.color = 'red';
// //
// // // Si le format de données est incorrect
// // }