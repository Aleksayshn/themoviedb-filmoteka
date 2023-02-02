export const refs = {
    btnHomePageEl: document.querySelector('.nav-item__home'),
    btnLibPageEl: document.querySelector('.nav-item__library'),
    btnSearchEl: document.querySelector('.search-form'),
    headerEl: document.querySelector('.homeimg'),

    btnLoginOpenEl: document.querySelector('.nav-item__login'),
    btnLogoutEl: document.querySelector('.nav-item__logout'),
    btnCloseAutEl: document.querySelector('button[data-action="close"]'),

    // Login Modal
    loginBackdropEl: document.querySelector('.modal-backdrop'),
    loginFormEl: document.querySelector('.modal-form.login'),
    btnGoogleEl: document.querySelector('.google-btn'),
    btnLoginEl: document.querySelector('.login-btn'),
    registerFormEl: document.querySelector('.modal-form.register'),
    modalBtnEls: document.querySelectorAll(
        '.modal-form button[data-action="toggle"]'
    ),

    // movieCards
    moviesBoxEl: document.querySelector('.trending-films__list'),

};



