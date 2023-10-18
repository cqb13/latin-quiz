import { getFirestore } from "firebase/firestore";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdMEK3I0N25LMD6nVwRSTWntm3Jcvrks0",
  authDomain: "shs-web-dev-9e7b7.firebaseapp.com",
  projectId: "shs-web-dev-9e7b7",
  storageBucket: "shs-web-dev-9e7b7.appspot.com",
  messagingSenderId: "301589639671",
  appId: "1:301589639671:web:8ea45c7ec1e926785e3ef2",
  measurementId: "G-0J5LJSBXTJ"
};

const app = initializeApp(firebaseConfig);
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, firebase_app };
