// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4egPEUGErQE3R6tsYNI7TOa67nKb6-A8",
    authDomain: "story-board-37d83.firebaseapp.com",
    databaseURL: "https://story-board-37d83-default-rtdb.firebaseio.com",
    projectId: "story-board-37d83",
    storageBucket: "story-board-37d83.appspot.com",
    messagingSenderId: "326044371137",
    appId: "1:326044371137:web:00f610cc2aefebeb72ec40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

set(ref(db, 'users/'), {
    username: "dave",
    email: "cod5000",
    profile_picture: 'imageUrl.jpg'
});