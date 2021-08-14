import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAYQ3vzy8EZGSS4gpKzeVgVRkxvdY_K0jg",
    authDomain: "tinder-clone-ebc2e.firebaseapp.com",
    projectId: "tinder-clone-ebc2e",
    storageBucket: "tinder-clone-ebc2e.appspot.com",
    messagingSenderId: "119174527475",
    appId: "1:119174527475:web:0473dcd52bedf9309d3a86"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default database;