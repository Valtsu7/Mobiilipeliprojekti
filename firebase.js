import firebase from 'firebase/app';
import 'firebase/firestore'; // Jos käytät Firestorea
// import 'firebase/database'; // Jos käytät Realtime Databasea

const firebaseConfig = {
  apiKey: "AIzaSyBNGr7ve5Zk07SmenUZmQEyTwb-UynuwZA",
  authDomain: "mobiilipeliprojekti.firebaseapp.com",
  projectId: "mobiilipeliprojekti",
  storageBucket: "mobiilipeliprojekti.firebasestorage.app",
  messagingSenderId: "995828374342",
  appId: "1:995828374342:android:a49a4e7ecaac6a57fde347",
  measurementId: undefined // Tai jätä kokonaan pois, jos et käytä Google Analyticsia
};

// Alusta Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Vie Firebase-instanssi
export default firebase;