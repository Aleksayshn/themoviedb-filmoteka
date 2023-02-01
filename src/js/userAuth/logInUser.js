import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from "../refs";
import { closeLoginModal } from './login-modal';

const auth = getAuth();

const onLoginFormSubmit = async (event) => {
    event.preventDefault();
    console.log('onLoginFormSubmit');
    // Getting credentials from the form inputs
    const { email, password } = event.currentTarget.elements;
    const loginEmail = email.value;
    const loginPassword = password.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        const user = userCredential.user.email;
        Notify.success(`Welcome back, ${user}!
            Successfully logged in.`);
        closeLoginModal();

    } catch (error) {
        if (error.message === 'Firebase: Invalid email address format.') {
            Notify.failure('Invalid email format. Please try again.');
        } else if (error.message === 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted.') {
            Notify.failure('No such user found. Please register first.');
        } else if (error.message === 'Firebase: The password is invalid or the user does not have a password.') {
            Notify.failure('Invalid password. Please try again.');
        } else {
            Notify.failure('Login error. Please try again.');
        }
    }
};

refs.loginFormEl.addEventListener('submit', onLoginFormSubmit);
