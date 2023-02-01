'use strict';

const config = {
  apiKey: "AIzaSyBJOvLdzU0D7EjuNkuBhHx3cxdHiddAL-Q",
  authDomain: "friendlychat-c6d05.firebaseapp.com",
  projectId: "friendlychat-c6d05",
  storageBucket: "friendlychat-c6d05.appspot.com",
  messagingSenderId: "258879907397",
  appId: "1:258879907397:web:68b8589950698e43a9a52c"
};
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
