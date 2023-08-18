
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdwiIJ0fv297Zfkuu2PPFaVpGWF7vD7x0",
  authDomain: "blogsite-e9d33.firebaseapp.com",
  projectId: "blogsite-e9d33",
  storageBucket: "blogsite-e9d33.appspot.com",
  messagingSenderId: "869265888001",
  appId: "1:869265888001:web:8c6cff45c64a789b534100"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();