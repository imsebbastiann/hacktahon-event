import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCBQ5b8qgtW2sMywgKes7apDId-7swI40I",
    authDomain: "hackaton-events.firebaseapp.com",
    projectId: "hackaton-events",
    storageBucket: "hackaton-events.appspot.com",
    messagingSenderId: "120557657483",
    appId: "1:120557657483:web:5d2faa09597cbb971d638e",
    measurementId: "G-1GGDZFG3X6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export default firebase