// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFvzmzAPLrXu3XnHZLkKvvlaIjnsjS-gI",
  authDomain: "uber-eats-clone-732cb.firebaseapp.com",
  projectId: "uber-eats-clone-732cb",
  storageBucket: "uber-eats-clone-732cb.appspot.com",
  messagingSenderId: "885859441702",
  appId: "1:885859441702:web:d512504bdf0b9c2c83dae7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
