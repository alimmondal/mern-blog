import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9e3d2.firebaseapp.com",
  projectId: "mern-blog-9e3d2",
  storageBucket: "mern-blog-9e3d2.appspot.com",
  messagingSenderId: "230147518608",
  appId: "1:230147518608:web:70a3e8ead6f36f4f912815"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);