// Import the Firebase core and auth modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration (keep these secure in production)
const firebaseConfig = {
  apiKey: "AIzaSyDvLRqlTBHbo-FEIXb4R4V_qcM4mop01Ps",
  authDomain: "e-comerce-ad822.firebaseapp.com",
  projectId: "e-comerce-ad822",
  storageBucket: "e-comerce-ad822.firebasestorage.app",
  messagingSenderId: "5580799607",
  appId: "1:5580799607:web:1d79955f17e7c80ef99072",
  measurementId: "G-R49WBM1JTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth service
const auth = getAuth(app);

// Google Auth provider
const provider = new GoogleAuthProvider();

// Google Sign-In function
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// Export auth for other usage
export { auth };
