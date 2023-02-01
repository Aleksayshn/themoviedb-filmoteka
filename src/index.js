window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}
import './js/refs';
import './js/userAuth/login-modal';
import './js/stop-scrolling';
import './js/userAuth/firebase-config';
import './js/userAuth/firebase-init';
import './js/userAuth/initAuth';
import './js/userAuth/signInGoogle';
import './js/userAuth/signOutUser';
import './js/userAuth/logInUser';
import './js/userAuth/registerUser';








