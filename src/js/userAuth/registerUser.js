import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from "../refs";
import { closeLoginModal } from './login-modal';

const auth = getAuth();
const onRegisterFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password, repeat } = event.currentTarget.elements;
    const loginEmail = email.value;
    const loginPassword = password.value;
    const repeatPassword = repeat.value;

    if (loginPassword !== repeatPassword) {
        Notify.failure('Passwords do not match');
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        Notify.success(`Welcome, ${userCredential.user.email}! Account created successfully.`);
        closeLoginModal();
    } catch (error) {
        Notify.failure(`Error: ${error.message}`);
    }
};

refs.registerFormEl.addEventListener('submit', onRegisterFormSubmit)