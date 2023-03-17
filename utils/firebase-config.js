import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEv8BCLy_xos4jQNr1zAydM-yMnbSWzMU",
  authDomain: "nexttest-5121e.firebaseapp.com",
  projectId: "nexttest-5121e",
  storageBucket: "nexttest-5121e.appspot.com",
  messagingSenderId: "295859999256",
  appId: "1:295859999256:web:663f1e08e8dc181a54a96d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);