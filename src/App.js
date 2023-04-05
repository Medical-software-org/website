import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/contentBox.css";
import NavBar from "./components/navigationBar";
import Footer from "./components/footer";
import Home from "./components/Home";
import Privacy from "./components/legal/privacy";
import Faq from "./components/legal/freqAsked";
import { useLocation } from "react-router-dom";

// firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

// TODO: re-design send us message and sign up, modal for success, firebase rules fix (chatGPT),
// fix github deploy issue, rewrite text for 'Our goal' section.

function App() {
  const routePath = useLocation();
  const endRef = useRef(null);
  const signUpRef = useRef(null);
  const [db, setDb] = useState(null);

  const scrollToFooter = (e) => {
    e.preventDefault();
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSignUp = (e) => {
    e.preventDefault();
    signUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    toTop();

    // Firebase configuration
    const {
      REACT_APP_apiKey,
      REACT_APP_authDomain,
      REACT_APP_databaseURL,
      REACT_APP_projectId,
      REACT_APP_storageBucket,
      REACT_APP_messagingSenderId,
      REACT_APP_appId,
    } = process.env;

    try {
      const firebaseConfig = {
        apiKey: REACT_APP_apiKey,
        authDomain: REACT_APP_authDomain,
        databaseURL: REACT_APP_databaseURL,
        projectId: REACT_APP_projectId,
        storageBucket: REACT_APP_storageBucket,
        messagingSenderId: REACT_APP_messagingSenderId,
        appId: REACT_APP_appId,
      };

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      setDb(firebase.database());
    } catch (error) {
      // do nothing
      // console.log(error);
    }
  }, [routePath]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home db={db} signUpRef={signUpRef} />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route
          path="/FAQ"
          element={
            <Faq
              signUpRef={signUpRef}
              scrollToSignUp={scrollToSignUp}
              scrollToEnd={scrollToFooter}
              db={db}
            />
          }
        />
      </Routes>
      <Footer reference={endRef} />
    </div>
  );
}

export default App;
