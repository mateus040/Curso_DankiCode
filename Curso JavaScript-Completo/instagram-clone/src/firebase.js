// Autenticação do Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/functions';


const firebaseConfig = {
  apiKey: "AIzaSyC0_c7MOVebgrcj6ukGoAO-aFCKm206B74",
  authDomain: "instagram-clone-d34fe.firebaseapp.com",
  projectId: "instagram-clone-d34fe",
  storageBucket: "instagram-clone-d34fe.appspot.com",
  messagingSenderId: "790413126779",
  appId: "1:790413126779:web:010f3fb14451e3e1c946de",
  measurementId: "G-RP30NWPPX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore(); // Database em tempo real
const auth = firebase.auth();
const storage = firebase.storage(); // Upload de arquivos
const functions = firebase.functions();

export { db, auth, storage, functions };