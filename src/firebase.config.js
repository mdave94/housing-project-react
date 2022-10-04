import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBweNbkE-BNx-x74odlj1Aa-irkM5j8Eco",
  authDomain: "housing-project-react.firebaseapp.com",
  projectId: "housing-project-react",
  storageBucket: "housing-project-react.appspot.com",
  messagingSenderId: "608663336755",
  appId: "1:608663336755:web:9cbe29b57f421204193046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()