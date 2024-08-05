// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYa6FoMm9j9n0mwozg240wI3ZR2rktfgU",
  authDomain: "inventory-management-e0895.firebaseapp.com",
  projectId: "inventory-management-e0895",
  storageBucket: "inventory-management-e0895.appspot.com",
  messagingSenderId: "314029054148",
  appId: "1:314029054148:web:ccf22d1632b028b8aad191",
  measurementId: "G-4762RGCKKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { firestore, analytics };
