import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyA1uV-Qb6wmXkW_6xPqvDUDEmqBtPiTUhQ',
  authDomain: 'getdagnis-2024.firebaseapp.com',
  projectId: 'getdagnis-2024',
  storageBucket: 'getdagnis-2024.appspot.com',
  messagingSenderId: '690139059654',
  appId: '1:690139059654:web:7b2c3e7bc18790c0128ec7',
  measurementId: 'G-JWRXKK1QPP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
