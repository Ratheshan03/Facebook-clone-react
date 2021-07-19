import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7GhY3HXVlS3pQAq0RVk-LNxWKNc4fGyk",
  authDomain: "facebook-clone-39534.firebaseapp.com",
  projectId: "facebook-clone-39534",
  storageBucket: "facebook-clone-39534.appspot.com",
  messagingSenderId: "443617643572",
  appId: "1:443617643572:web:b487f1426e3fa068ee8e61",
  measurementId: "G-QG76W3J01P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
