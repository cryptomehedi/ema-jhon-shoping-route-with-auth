// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRdTeAps3rsi-RPsVjcFIfSUOoxwD-mzc",
    authDomain: "ema-jhon-shoping-63c9a.firebaseapp.com",
    projectId: "ema-jhon-shoping-63c9a",
    storageBucket: "ema-jhon-shoping-63c9a.appspot.com",
    messagingSenderId: "22116828068",
    appId: "1:22116828068:web:7a19e0692c699fe11fb731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth