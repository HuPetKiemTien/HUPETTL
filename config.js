// js/config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQuq-52qZ4FfsP66pVEVgYCP50zBNVKo4",
  authDomain: "hc88-dcaab.firebaseapp.com",
  databaseURL: "https://hc88-dcaab-default-rtdb.firebaseio.com",
  projectId: "hc88-dcaab",
  storageBucket: "hc88-dcaab.firebasestorage.app",
  messagingSenderId: "315665399762",
  appId: "1:315665399762:web:e5e34287e53381f496920b",
  measurementId: "G-9W1W79F84X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
