import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAnZG_nYm-mNcLfs-wiOy146IMuq9t-YwQ",
  authDomain: "products-2cc65.firebaseapp.com",
  projectId: "products-2cc65",
  storageBucket: "products-2cc65.appspot.com",
  messagingSenderId: "581319746667",
  appId: "1:581319746667:web:8cc93cc2afc24c953cbd2e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
