import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDEdrNgjFbIvPxly_uOUmfvdbuChKAZM-c",
  authDomain: "book-2-34ad7.firebaseapp.com",
  projectId: "book-2-34ad7",
  storageBucket: "book-2-34ad7.appspot.com",
  messagingSenderId: "441531066902",
  appId: "1:441531066902:web:f7e71c9f1c67b7c2e9e337"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
