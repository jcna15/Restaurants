import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBl-dbQd8DYLT1_5uStWgf75tAloEJvChc",
    authDomain: "restaurants-a1952.firebaseapp.com",
    projectId: "restaurants-a1952",
    storageBucket: "restaurants-a1952.appspot.com",
    messagingSenderId: "426589235151",
    appId: "1:426589235151:web:bb6ebd43e97e43e36494ba"
  };

  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
