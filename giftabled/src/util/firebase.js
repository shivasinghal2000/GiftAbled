import firebase from 'firebase'

const fireBaseApplication = firebase.initializeApp({
    apiKey: "AIzaSyAgRSyUD9VyVF94HARNBaO234cDnRDq6KA",
    authDomain: "giftabled-2de50.firebaseapp.com",
    projectId: "giftabled-2de50",
    storageBucket: "giftabled-2de50.appspot.com",
    messagingSenderId: "1078193290019",
    appId: "1:1078193290019:web:3d1524b3c9dcab15e6aa96"
});

const db = fireBaseApplication.firestore();
const auth = fireBaseApplication.auth();

export {db, auth};