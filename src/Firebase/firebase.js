import firebase from 'firebase/app';

import  'firebase/firestore';
import  'firebase/auth';


import {useAuthState} from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore';

const firebaseApp = firebase.initializeApp({

    apiKey: 'AIzaSyCvOgej7pYgd7pG-2N0P1rJ7pGjH09e54c',
    authDomain: 'nino-ca8ae.firebaseapp.com',
    databaseURL: 'https://nino-ca8ae.firebaseio.com',
    projectId: 'nino-ca8ae',
    storageBucket: 'nino-ca8ae.appspot.com',
    messagingSenderId: '344611046640',
    appId: '1:344611046640:web:9ada5f8154d202eb2c2e35'
});



export const auth = firebase.auth();
export const db = firebaseApp.firestore();

