import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyC4eJUayhr2XPpu0JNbhz86ggrZLwhc9Oc",
  authDomain: "netflix-react-9c09c.firebaseapp.com",
  projectId: "netflix-react-9c09c",
  storageBucket: "netflix-react-9c09c.appspot.com",
  messagingSenderId: "713273158735",
  appId: "1:713273158735:web:04fe1a2d372585860d0e3a",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
