import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FadeInWrapper } from "./fade-in-wrapper/fade-in-wrapper";

export function BoxesContentBox() {
  const navigate = useNavigate();

  return (
    <div className="columns mb-6 is-centered is-vcentered">
      <FadeInWrapper>
        <div className="box clickable p-6" onClick={() => navigate("/privacy")}>
          <h1>Privacy Policy</h1>
          <p>
            Click here to read our privacy policy and learn how we protect and
            use your data.
          </p>
          <i id="icon" className="fa fa-info-circle"></i>
        </div>
      </FadeInWrapper>
      <FadeInWrapper>
        <div
          className="box clickable p-6 mt-mobile-only"
          onClick={() => navigate("/FAQ")}
        >
          <h1>FAQ</h1>
          <p>
            Visit our FAQ section to find answers to frequently asked questions.
          </p>
          <i id="icon" className="fa fa-question-circle"></i>
        </div>
      </FadeInWrapper>
    </div>
  );
}
