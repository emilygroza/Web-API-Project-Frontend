import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAiqh_lx3ml7RsrOKlEmcUcQlzFo9SVXOI",
    authDomain: "messaging-app-mern-5820d.firebaseapp.com",
    projectId: "messaging-app-mern-5820d",
    storageBucket: "messaging-app-mern-5820d.appspot.com",
    messagingSenderId: "568221705005",
    appId: "1:568221705005:web:4288dfb84b5a7c7ce269a4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db