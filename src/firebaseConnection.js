import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBmWfkmB0JvAS9Pe2xYQzFur9KIsAgTPiM",
    authDomain: "cursoreact-a4ca4.firebaseapp.com",
    projectId: "cursoreact-a4ca4",
    storageBucket: "cursoreact-a4ca4.appspot.com",
    messagingSenderId: "409333824494",
    appId: "1:409333824494:web:f69d1132dfadefe756acff",
    measurementId: "G-27GMT2VC36"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };