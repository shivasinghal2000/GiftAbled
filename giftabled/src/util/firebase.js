import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth';
//Tanish db
// const fireBaseApplication = firebase.initializeApp({
//     apiKey: "AIzaSyAgRSyUD9VyVF94HARNBaO234cDnRDq6KA",
//     authDomain: "giftabled-2de50.firebaseapp.com",
//     projectId: "giftabled-2de50",
//     storageBucket: "giftabled-2de50.appspot.com",
//     messagingSenderId: "1078193290019",
//     appId: "1:1078193290019:web:3d1524b3c9dcab15e6aa96"
// });
//ayush FB
// var firebaseConfig = {
//     apiKey: "AIzaSyDg3wSEwEu5pRNIQ7hzdAlW1bW-LaAbd9I",
//     authDomain: "giftabled-practise.firebaseapp.com",
//     projectId: "giftabled-practise",
//     storageBucket: "giftabled-practise.appspot.com",
//     messagingSenderId: "221294736212",
//     appId: "1:221294736212:web:e0acd851e51396e00d0ec1"
//   };
var firebaseConfig = {
    apiKey: "AIzaSyAgRSyUD9VyVF94HARNBaO234cDnRDq6KA",
    authDomain: "giftabled-2de50.firebaseapp.com",
     projectId: "giftabled-2de50",
     storageBucket: "giftabled-2de50.appspot.com",
     messagingSenderId: "1078193290019",
     appId: "1:1078193290019:web:3d1524b3c9dcab15e6aa96"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};