import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Tuo Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZNNyrxEip9yaJrAN6le32_zJYiw3zxs4",
  authDomain: "peliprojekti-f39a5.firebaseapp.com",
  projectId: "peliprojekti-f39a5",
  storageBucket: "peliprojekti-f39a5.firebasestorage.app",
  messagingSenderId: "989456276483",
  appId: "1:989456276483:web:899fe703e0e167889dc236",
  measurementId: "G-Y6Q40QLRLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const db = getFirestore(app); // Alusta Firestore
export default db; // Vie Firestore-instanssi, ei koko firebase-objektia
// export { app, analytics, db }; // Vaihtoehtoisesti voit viedä kaikki, jos tarvitset niitä myöhemmin