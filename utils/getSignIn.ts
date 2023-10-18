import { getDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function getSignIn() {
  const docRef = doc(db, "latin-quiz", "info");
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    console.log("No such document!");
    return;
  }

  return {
    username: docSnap.data().username,
    password: docSnap.data().secure_password
  };
}
