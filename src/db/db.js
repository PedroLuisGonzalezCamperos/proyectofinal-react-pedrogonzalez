
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiMadqgIDAD85XWofIegtW0Gm910Os-bU",
  authDomain: "ecommerce-electronic-b68ba.firebaseapp.com",
  projectId: "ecommerce-electronic-b68ba",
  storageBucket: "ecommerce-electronic-b68ba.firebasestorage.app",
  messagingSenderId: "745594414174",
  appId: "1:745594414174:web:bbfd0e87a14b3df7edc0cf"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db