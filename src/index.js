import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"

import Home from "./pages/home";
import Routing from "./pages";

const firebaseConfig = {
    apiKey: "AIzaSyCm96tsB6kzlmw4IrFg7t4TADk6i9t9IV4",
    authDomain: "the-fakebook.firebaseapp.com",
    projectId: "the-fakebook",
    storageBucket: "the-fakebook.appspot.com",
    messagingSenderId: "1034547393769",
    appId: "1:1034547393769:web:cbe566bb07f8112a8bac78",
    measurementId: "G-VV0V1X0K4E"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
