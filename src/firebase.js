// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM-SBUH-sIPVuqTlpQ5Nlh7ar9sxI8vDI",
  authDomain: "hiring-cell.firebaseapp.com",
  projectId: "hiring-cell",
  storageBucket: "hiring-cell.appspot.com",
  messagingSenderId: "491193655632",
  appId: "1:491193655632:web:a4000dfc9ea0fc674ccc55",
  measurementId: "G-SH0KV6VCME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
