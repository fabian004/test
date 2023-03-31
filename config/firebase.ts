// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { firebaseConfig } from '../firebase-config';



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
