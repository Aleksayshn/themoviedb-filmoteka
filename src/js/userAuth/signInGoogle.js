import { refs } from '../refs';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { closeLoginModal } from "../userAuth/login-modal";

refs.btnGoogleEl.addEventListener('click', signIn);


async function signIn(e) {
    e.preventDefault();

    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(result);
        closeLoginModal()
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    }
}

