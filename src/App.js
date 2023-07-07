import React, { useEffect } from "react";
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

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    toTop();
  }, [routePath]);

  return (
    <div className="App my-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/FAQ" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
