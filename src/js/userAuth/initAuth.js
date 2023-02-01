'use strict';
import { refs } from '../refs';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

initFirebaseAuth();
const userPicElement = document.getElementById('user');

function initFirebaseAuth() {
    // Listen to auth state changes.
    onAuthStateChanged(getAuth(), authStateObserver);
}


function authStateObserver(user) {
    if (user) { // User is signed in!
        // Get the signed-in user's profile pic and name.
        const profilePicUrl = getProfilePicUrl();
        const userName = getUserName();
        if (profilePicUrl) {
            // Set the user's profile pic.
            userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
        }
        userPicElement.classList.remove('is-hidden');

        // Hide sign-in button.
        refs.btnLogoutEl.classList.remove('is-hidden');
        refs.btnLoginOpenEl.classList.add('is-hidden');

    } else { // User is signed out!
        // Hide user's profile and sign-out button.
        userPicElement.classList.add('is-hidden');
        refs.btnLogoutEl.classList.add('is-hidden');

        // Show sign-in button.
        userPicElement.classList.add('is-hidden');
        refs.btnLoginOpenEl.classList.remove('is-hidden');
    }
}

function getProfilePicUrl() {
    return getAuth().currentUser.photoURL;
}

// Returns the signed-in user's display name.
function getUserName() {
    return getAuth().currentUser.userName;
}

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url) {
    if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
        return url + '?sz=150';
    }
    return url;
}


