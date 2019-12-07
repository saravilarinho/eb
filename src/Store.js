import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
/*
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';
*/



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXyIfTVpEjzdnsiU2hvcaOxwE6cmMkNeA",
    authDomain: "entertainment-base-3ff13.firebaseapp.com",
    databaseURL: "https://entertainment-base-3ff13.firebaseio.com",
    projectId: "entertainment-base-3ff13",
    storageBucket: "entertainment-base-3ff13.appspot.com",
    messagingSenderId: "391712416485",
    appId: "1:391712416485:web:c0b176d724a247a1f16a0c",
    measurementId: "G-7J8ZDKFQLS"
};


// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);


// Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
)(createStore);



//REDUCERS - VOLTAR FAZER
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
/*    notify: notifyReducer,
    settings: settingsReducer*/
});

// Check for settings in localStorage
/*if (localStorage.getItem('settings') == null) {
    // Default settings
    const defaultSettings = {
        disableBalanceOnAdd: true,
        disableBalanceOnEdit: false,
        allowRegistration: false
    };

    // Set to localStorage
    localStorage.setItem('settings', JSON.stringify(defaultSettings));
}*/

// Create initial state
const initialState = {/* settings: JSON.parse(localStorage.getItem('settings'))*/ };

// Create store
const store2 = createStoreWithFirebase(rootReducer, initialState, compose(
        reactReduxFirebase(firebase)
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store2;