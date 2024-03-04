import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: 
  // process.env.API_KEY,
  "AIzaSyA3jppPm0IWuV64jbaTur6RAAbJx1BHiWE",
  authDomain: "dashboard-app-db87c.firebaseapp.com",
  projectId: "dashboard-app-db87c",
  storageBucket: "dashboard-app-db87c.appspot.com",
  messagingSenderId: "1006409695616",
  appId: "1:1006409695616:web:7a71a069c35f8a488fc165"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const auth = getAuth();
export { app, auth };



