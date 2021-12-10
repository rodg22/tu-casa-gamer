import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBANpsZ32-m0nEEew6PMJmKFUQ0O53_OxM",
  authDomain: "tu-casa-gamer.firebaseapp.com",
  projectId: "tu-casa-gamer",
  storageBucket: "tu-casa-gamer.appspot.com",
  messagingSenderId: "674264063744",
  appId: "1:674264063744:web:98b7683435227b32269de5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById("root")
);


