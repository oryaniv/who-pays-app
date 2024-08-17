import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaqSVJir3mJZVxL2OqhpruKOqCsBYIJWk",
  authDomain: "who-pays-app-d1528.firebaseapp.com",
  projectId: "who-pays-app-d1528",
  storageBucket: "who-pays-app-d1528.appspot.com",
  messagingSenderId: "1071081177912",
  appId: "1:1071081177912:web:b5cbbd6d7aefb6a24477cd",
  measurementId: "G-DNWMJ0C19G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
