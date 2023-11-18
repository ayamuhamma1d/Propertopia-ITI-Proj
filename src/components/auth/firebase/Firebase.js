import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAc9QfpkdeoQlCJLlrLtxI7gH7jKghv50g",
  authDomain: "propertopi.firebaseapp.com",
  databaseURL:
    "https://propertopi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "propertopi",
  storageBucket: "propertopi.appspot.com",
  messagingSenderId: "588141933109",
  appId: "1:588141933109:web:a87ec8f09225b1c431b77c",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const auth = getAuth();

const rootRef = ref(database);

const snapshot = await get(rootRef);

export const data = snapshot.val();
export const provider = new GoogleAuthProvider(app);
export const providerFb = new FacebookAuthProvider(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
