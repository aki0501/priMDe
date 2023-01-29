// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD36Dubnrd6gDKuYpUKcX53J5jV31po5RE",
    authDomain: "qwerhacks-e64cc.firebaseapp.com",
    projectId: "qwerhacks-e64cc",
    storageBucket: "qwerhacks-e64cc.appspot.com",
    messagingSenderId: "1020770984923",
    appId: "1:1020770984923:web:1bf27909486d8036e9fdfe",
    measurementId: "G-SWX93CZ8N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db 