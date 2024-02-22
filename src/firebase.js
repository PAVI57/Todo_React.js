import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-UY5HriYzFP6Rk9PmcBpvuFqK3PMJJjU",
    authDomain: "todo-505bd.firebaseapp.com",
    projectId: "todo-505bd",
    storageBucket: "todo-505bd.appspot.com",
    messagingSenderId: "1056390493361",
    appId: "1:1056390493361:web:14d8f41644b6702faede90",
    measurementId: "G-EMGJG7ZXXN"
  };

  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app);
  export { db };
