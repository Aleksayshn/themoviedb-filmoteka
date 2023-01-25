import { refs } from '../refs';
import { scroll } from '../stop-scrolling';


refs.modalBtnEls[0].addEventListener('click', switchModals);
refs.modalBtnEls[1].addEventListener('click', switchModals);

refs.btnLoginOpenEl.addEventListener('click', openLoginModal);
refs.btnCloseAutEl.addEventListener('click', closeLoginModal);
refs.loginBackdropEl.addEventListener('click', onBackdropClick);

function switchModals() {
    refs.loginFormEl.classList.toggle('is-hidden');
    refs.registerFormEl.classList.toggle('is-hidden');
};

function openLoginModal() {
    scroll.disableScroll();
    refs.loginBackdropEl.classList.toggle('is-hidden');
    window.addEventListener('keydown', onEscPress);
};

function closeLoginModal() {
    scroll.enableScroll();
    refs.loginBackdropEl.classList.toggle('is-hidden');
    window.removeEventListener('keydown', onEscPress);
};

function onEscPress(e) {
    if (e.code === 'Escape') {
        closeLoginModal();
    }
};

function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
        closeLoginModal();
    }
};
