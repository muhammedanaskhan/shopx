import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdKQgAZTSkgR_BVZwjkd6ZD1u7R28lhlE",
    authDomain: "shopx-42892.firebaseapp.com",
    projectId: "shopx-42892",
    storageBucket: "shopx-42892.appspot.com",
    messagingSenderId: "168039020574",
    appId: "1:168039020574:web:1cdf9d0a48004cf43e160f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};

