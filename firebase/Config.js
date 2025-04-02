// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtBDeEpqZHlZUT6Xpzy1sQiF6eB2DCORM",
  authDomain: "spedennopeustesti.firebaseapp.com",
  projectId: "spedennopeustesti",
  storageBucket: "spedennopeustesti.firebasestorage.app",
  messagingSenderId: "798501807044",
  appId: "1:798501807044:web:05dbb773f96ebdb4277a91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };