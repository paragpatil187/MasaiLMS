// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBPYTXYKvqSzZU06PpDJiCPgTDz3vdlyg4",
    authDomain: "masailms-ca33f.firebaseapp.com",
    projectId: "masailms-ca33f",
    storageBucket: "masailms-ca33f.appspot.com",
    messagingSenderId: "252789048811",
    appId: "1:252789048811:web:4418c751b67b190e0a85ae",
    measurementId: "G-0EGSZ3G66M"
  };
  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)