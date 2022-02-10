import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0zY_MM9sLCXmj54PGGmFRKEmmiv5Qy48",
  authDomain: "d-charity-52e65.firebaseapp.com",
  projectId: "d-charity-52e65",
  storageBucket: "d-charity-52e65.appspot.com",
  messagingSenderId: "625010827321",
  appId: "1:625010827321:web:b0bf3c2dd0e6f57c32ade8",
};

const app = initializeApp(firebaseConfig);

const db = app.firestore();

export { db };
