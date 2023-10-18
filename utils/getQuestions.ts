import { getDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function getQuestions() {
  const docRef = doc(db, "latin-quiz", "questions");
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    console.log("No such document!");
    return;
  }
  return docSnap.data().questions;
}
