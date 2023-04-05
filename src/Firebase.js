import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCb7yO_9nloNhSwFXqOLT2qglZUFFfywg",
    authDomain: "auth-6b3e1.firebaseapp.com",
    projectId: "auth-6b3e1",
    storageBucket: "auth-6b3e1.appspot.com",
    messagingSenderId: "3988112922",
    appId: "1:3988112922:web:71b1511bd4ac0f6de233a3"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
