import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMzsog74Z2Q97SAVUxQfJaUxY_1IThtO4",
  authDomain: "chatgpt-clone-5677f.firebaseapp.com",
  projectId: "chatgpt-clone-5677f",
  storageBucket: "chatgpt-clone-5677f.appspot.com",
  messagingSenderId: "992620311396",
  appId: "1:992620311396:web:5dea8d5c33c5f167f04071"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };