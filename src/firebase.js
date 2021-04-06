import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig =  firebase.initializeApp({
    apiKey: "AIzaSyAHbEulTKGDyQY99MH6zh-HXLE_2a_aJf0",
    authDomain: "clone-a5c87.firebaseapp.com",
    projectId: "clone-a5c87",
    storageBucket: "clone-a5c87.appspot.com",
    messagingSenderId: "204147068440",
    appId: "1:204147068440:web:4245b2ebe78e4ef7857d6d",
    measurementId: "G-1S1V17M6CF"
  });

  const db = firebase.firestore();
  export {db}  