import * as firebase from 'firebase/app';
import 'firebase/auth';

//import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBQ2fxUMQA9o6WKTT8toaUT0rOb-DLRkUw",
    authDomain: "entertainment-base-c1930.firebaseapp.com",
    databaseURL: "https://entertainment-base-c1930.firebaseio.com",
    projectId: "entertainment-base-c1930",
    storageBucket: "entertainment-base-c1930.appspot.com",
    messagingSenderId: "592681936176",
    appId: "1:592681936176:web:00dbd158aef4c0ab3f14f5",
    measurementId: "G-G2VRL02TN0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;


//firebase.firestore().settings({timestampsInSnapshots: true});


