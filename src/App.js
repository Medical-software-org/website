import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "./components/contentBox.css";
import NavBar from "./components/navigationBar";
import Footer from "./components/footer";
import Home from "./components/Home";
import Privacy from "./components/legal/privacy";
import Faq from "./components/legal/freqAsked";
import { useLocation } from "react-router-dom";

function App() {
  const routePath = useLocation();
  const signUpRef = useRef(null);

  const scrollToSignUp = (e) => {
    e.preventDefault();
    signUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    toTop();
  }, [routePath]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home signUpRef={signUpRef} />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route
          path="/FAQ"
          element={
            <Faq signUpRef={signUpRef} scrollToSignUp={scrollToSignUp} />
          }
        />
      </Routes>
      <Footer signUpRef={signUpRef} />
    </div>
  );
}

export default App;
