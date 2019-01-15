// Firebase initialization

import firebase from "firebase";

const base = firebase.initializeApp({
  apiKey: "AIzaSyCdRwrstb_7IrOg2P5gMm6fE5fNJhC8mb0",
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});

export default base;