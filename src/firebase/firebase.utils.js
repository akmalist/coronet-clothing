import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const signInConfig = {
  //public key
  apiKey: "AIzaSyCqPP5YxrRovPEzN07kfJbRI5X6tHuuo_0",
  authDomain: "coronet-db-b02c8.firebaseapp.com",
  projectId: "coronet-db-b02c8",
  storageBucket: "coronet-db-b02c8.appspot.com",
  messagingSenderId: "566085034686",
  appId: "1:566085034686:web:09e9da0d7a9b0bcc9cf4ef",
  measurementId: "G-3XCJ6R8LP2",
};

firebase.initializeApp(signInConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
