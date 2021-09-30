import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBshK7rH4KK-kE5z4moIcz6O_5n0CMtnoY",
  authDomain: "facebook-react-clone-f96be.firebaseapp.com",
  projectId: "facebook-react-clone-f96be",
  storageBucket: "facebook-react-clone-f96be.appspot.com",
  messagingSenderId: "715403415858",
  appId: "1:715403415858:web:82def7b749e4e148f8072b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {app, auth, db, storage}