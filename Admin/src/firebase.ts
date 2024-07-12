// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY ,
  authDomain: "portfolio-20b8e.firebaseapp.com",
  projectId: "portfolio-20b8e",
  storageBucket: "portfolio-20b8e.appspot.com",
  messagingSenderId: "957258645137",
  appId: "1:957258645137:web:515af721da081616b90930",
  measurementId: "G-94FY6418X6"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

