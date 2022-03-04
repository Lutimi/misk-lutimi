// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTA231cUuyW3QNM1uWZ3aEVn8ZNozciX0",
  authDomain: "misky-c3d55.firebaseapp.com",
  projectId: "misky-c3d55",
  storageBucket: "misky-c3d55.appspot.com",
  messagingSenderId: "65680630497",
  appId: "1:65680630497:web:ffaa99eeae6d0971820da0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;