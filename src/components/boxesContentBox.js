import React from "react";
import { globalColors } from "./colors";
import { Link } from "react-router-dom";
import { FadeInWrapper } from "./fade-in-wrapper/fade-in-wrapper";

function boxesContentBox({ heading, subHeading }) {
  return (
    <div className="center-container-row" style={{ color: globalColors.blue }}>
      <div className="flex-container">
        <FadeInWrapper>
          <div className="flex-item-left-border">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/privacy"
            >
              <div className="box" style={{ height: 306 }}>
                <h1>Privacy Policy</h1>
                <i id="icon" className="fa fa-info-circle"></i>
              </div>
            </Link>
          </div>
        </FadeInWrapper>
        <FadeInWrapper>
          <div className="flex-item-right-border">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/FAQ"
            >
              <div className="box">
                <h1>Frequently Asked Questions</h1>
                <i id="icon" className="fa fa-question-circle"></i>
              </div>
            </Link>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}

export default boxesContentBox;
