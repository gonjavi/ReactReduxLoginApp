 import firebase from 'firebase/app'
 import 'firebase/firestore';
 import 'firebase/auth';

 // Your web app's Firebase configuration
 var config = {
  apiKey: "AIzaSyCz8t5yhGGUIbeCJLA0uRwMCB7HOrbbfnA",
  authDomain: "test1-e26b2.firebaseapp.com",
  databaseURL: "https://test1-e26b2.firebaseio.com",
  projectId: "test1-e26b2",
  storageBucket: "test1-e26b2.appspot.com",
  messagingSenderId: "330007341366",
  appId: "1:330007341366:web:57657e43e678469960ab97"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
