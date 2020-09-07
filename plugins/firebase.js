import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';


if (!firebase.apps.length) {
   const config = {    
        
    apiKey: "AIzaSyC5LMtCG471uOGltWC7QuYdanmiDfKeJS0",
    authDomain: "aaaa-916e4.firebaseapp.com",
    databaseURL: "https://aaaa-916e4.firebaseio.com",
    projectId: "aaaa-916e4",
    storageBucket: "aaaa-916e4.appspot.com",
    messagingSenderId: "832724965731",
    appId: "1:832724965731:web:78abe5b77b535917b91b56",
    measurementId: "G-220QVCYQVR"
    
    }
    firebase.initializeApp(config)
}

const fireDb = firebase.database()

export {fireDb}