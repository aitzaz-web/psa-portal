import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFYflsv1XBu0N-bhq-a-YshYjUFLBvdYY",
  authDomain: "psa-networking-portal.firebaseapp.com",
  projectId: "psa-networking-portal",
  storageBucket: "psa-networking-portal.firebasestorage.app",
  messagingSenderId: "989135568063",
  appId: "1:989135568063:web:c1100653745699b3289a0a",
  measurementId: "G-T7G6FYDDVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app); // optional

// ✅ Export both auth and db
export { auth, db };
