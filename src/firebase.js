import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDkXy0pVruFsINl2bjQWWlQ2tgih6tCLHo",
	authDomain: "socialhangout-f995d.firebaseapp.com",
	databaseURL: "https://socialhangout-f995d-default-rtdb.firebaseio.com/",
	projectId: "socialhangout-f995d",
	storageBucket: "socialhangout-f995d.appspot.com",
	messagingSenderId: "147988676773",
	appId: "1:147988676773:web:326fa6403fbefea5cb0d4c",
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storageRef = firebaseApp.storage().ref();
const db = firebaseApp.firestore();

export { auth, provider, storageRef };
export default db;
