import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx3hkdAJEHRn5IorXOT0DXzDy_nbqI-tI",
  authDomain: "socialmedia-9dbdb.firebaseapp.com",
  projectId: "socialmedia-9dbdb",
  storageBucket: "socialmedia-9dbdb.appspot.com",
  messagingSenderId: "749604099747",
  appId: "1:749604099747:web:a379639ba952d69fa85116"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();