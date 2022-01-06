import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDnzsER3QZGzRXAlc8YLjxPTvtLc7szR4Q",
    authDomain: "you-tube-theone.firebaseapp.com",
    projectId: "you-tube-theone",
    storageBucket: "you-tube-theone.appspot.com",
    messagingSenderId: "789234935481",
    appId: "1:789234935481:web:55b091d3c3460be4f7dd68"
}

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
