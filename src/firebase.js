// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_k0V7Y5oZq5Yow8PNAadKhshrvSob-aI",
  authDomain: "myproject2-c9a37.firebaseapp.com",
  projectId: "myproject2-c9a37",
  storageBucket: "myproject2-c9a37.appspot.com",
  messagingSenderId: "645402503797",
  appId: "1:645402503797:web:37a5d803bff8722807a63c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
