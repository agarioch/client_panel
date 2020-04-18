import { createStore, combineReducers } from 'redux'
import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

// Reducers
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

// react-redux-firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCAk26P4icdHEGbnC2sBP4-lEbpS54_v9Y",
    authDomain: "react-client-panel-db2f8.firebaseapp.com",
    databaseURL: "https://react-client-panel-db2f8.firebaseio.com",
    projectId: "react-client-panel-db2f8",
    storageBucket: "react-client-panel-db2f8.appspot.com",
    messagingSenderId: "304255179222",
    appId: "1:304255179222:web:2fc12a16e043a8c07d2c77"
};

// const rrfConfig = {
//     userProfile: 'users',
//     useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// intialize firestore
firebase.firestore();

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducer,
    settings: settingsReducer
});

const initialState = {};
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const rrfProps = {
//     firebase,
//     config: rrfConfig,
//     dispatch: store.dispatch,
//     createFirestoreInstance
// };

export default store;