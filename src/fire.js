// Import the functions you need from the SDKs you need
import {initializeApp}from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYiYOUI47WIwMyzS2pIZFR0wnSLIJ2KVE",
    authDomain: "myfirstproject-14fbc.firebaseapp.com",
    databaseURL: "https://myfirstproject-14fbc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myfirstproject-14fbc",
    storageBucket: "myfirstproject-14fbc.appspot.com",
    messagingSenderId: "734007894320",
    appId: "1:734007894320:web:abefab0aa59c89a397a8f5"
  };
  

// Initialize Firebase
const app =initializeApp(firebaseConfig);

export const database = getDatabase(app);
