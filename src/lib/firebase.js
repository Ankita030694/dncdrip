// Import the functions you need from the SDKs you need

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCSKBrcYaIh_SHBJNtP6xxwquqO17m6meQ",

  authDomain: "designncode-c3380.firebaseapp.com",

  projectId: "designncode-c3380",

  storageBucket: "designncode-c3380.firebasestorage.app",

  messagingSenderId: "212177461161",

  appId: "1:212177461161:web:6a6b676e0388197a1aeeb8",

  measurementId: "G-WKLGR8NSVM"

};


// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let analytics;
if (typeof window !== 'undefined') {
  import("firebase/analytics").then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}
export const db = getFirestore(app);
export const auth = getAuth(app);