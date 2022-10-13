// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// incluir as configurações obtidas no firebase console 
//
const firebaseConfig = {
    apiKey: "AIzaSyA8-rGRZBkFlDBbn25NNBz0v6JUFGpQr8U",
    authDomain: "aula-13-10-2022.firebaseapp.com",
    databaseURL: "https://aula-13-10-2022-default-rtdb.firebaseio.com",
    projectId: "aula-13-10-2022",
    storageBucket: "aula-13-10-2022.appspot.com",
    messagingSenderId: "4446767798",
    appId: "1:4446767798:web:6fab8548f02cab5313f417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database
