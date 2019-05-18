import app from 'firebase/app';
import 'firebase/auth';

const devConfig = {
  apiKey: process.env.REACT_APP_DEV_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_DEV_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_DEV_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_FIREBASE_SENDER_ID,
};

const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_PROD_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_PROD_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_FIREBASE_SENDER_ID,
};

const config =
process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config);
    }

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;