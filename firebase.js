import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCkcSdp96A9maeexrAKGSSmJk7mKfie4do",
  authDomain: "reactnotes-83386.firebaseapp.com",
  projectId: "reactnotes-83386",
  storageBucket: "reactnotes-83386.appspot.com",
  messagingSenderId: "507165347647",
  appId: "1:507165347647:web:8e042415b14d483e4e0d8a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
