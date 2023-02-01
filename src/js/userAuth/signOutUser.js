import { refs } from '../refs';
import { getAuth, signOut } from "firebase/auth";

refs.btnLogoutEl.addEventListener('click', signOutUser);

async function signOutUser(e) {
    e.preventDefault();
    console.log('signOutUser');
    // Sign out of Firebase.
    try {
        await signOut(getAuth());

    }
    catch (error) {
        console.log(error);
    };

}



