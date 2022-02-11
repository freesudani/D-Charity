import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD0zY_MM9sLCXmj54PGGmFRKEmmiv5Qy48",
  authDomain: "d-charity-52e65.firebaseapp.com",
  projectId: "d-charity-52e65",
});

const db = getFirestore(firebaseApp);

export default db;
