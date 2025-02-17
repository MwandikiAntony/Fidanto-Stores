import { initializeApp } from 'firebase/app'; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtCvJunzn3o4mQCbNpp427ABLjMrELbxA",
  authDomain: "fidanto-stores.firebaseapp.com",
  projectId: "fidanto-stores",
  storageBucket: "fidanto-stores.appspot.com",
  messagingSenderId: "657530992041",
  appId: "1:657530992041:web:78437304ef6257cdb5c0b8",
  measurementId: "G-P8Y9PTDRZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);  // Authentication service
export const db = getFirestore(app);  // Firestore service

// Export auth-related methods for use in other parts of the app
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
