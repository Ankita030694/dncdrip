const { initializeApp, getApps, getApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCSKBrcYaIh_SHBJNtP6xxwquqO17m6meQ",
  authDomain: "designncode-c3380.firebaseapp.com",
  projectId: "designncode-c3380",
  storageBucket: "designncode-c3380.firebasestorage.app",
  messagingSenderId: "212177461161",
  appId: "1:212177461161:web:6a6b676e0388197a1aeeb8",
  measurementId: "G-WKLGR8NSVM"
};

try {
  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  console.log("App initialized:", app.name);
  
  const db = getFirestore(app);
  console.log("Firestore initialized");
} catch (error) {
  console.error("Error:", error);
}
