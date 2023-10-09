// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "journey-together-3250e.firebaseapp.com",
  projectId: "journey-together-3250e",
  storageBucket: "journey-together-3250e.appspot.com",
  messagingSenderId: "66555109140",
  appId: "1:66555109140:web:434fc8fcf61bd1a02d6c01",
  measurementId: "G-VCDVEXYVSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 export {auth,provider};