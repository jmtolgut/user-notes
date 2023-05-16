// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5eg8zqsBk7HBZgu2T2GMy1NL5tg3KsEI",
  authDomain: "journamelmaterial.firebaseapp.com",
  projectId: "journamelmaterial",
  storageBucket: "journamelmaterial.appspot.com",
  messagingSenderId: "49870748231",
  appId: "1:49870748231:web:e3890638604de2afeecf62",
  measurementId: "G-9CNT59919L"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );