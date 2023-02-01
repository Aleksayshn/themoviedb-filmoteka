'use strict';

import { getFirebaseConfig } from './firebase-config'
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';


const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
getMessaging(firebaseApp);
console.info('Firebase messaging service worker is set up');