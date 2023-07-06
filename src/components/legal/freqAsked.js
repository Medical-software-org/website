import React from "react";
import { globalColors } from "../colors";
import { frequentlyAsked } from "../../text/questions";
import { Helmet } from "react-helmet-async";

function freqAsked() {
  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta
          name="description"
          content="Confused? Let us help you by answering our most frequently asked questions."
        />
      </Helmet>
      <div className="px-6">
        <div className="center-container" style={{ color: globalColors.blue }}>
          <h1 style={{ marginBottom: 50 }}>Frequently Asked Questions</h1>
          {frequentlyAsked.map((item) => {
            return (
              <>
                <h4 style={{ marginTop: 10 }}>Q: {item.question}</h4>
                <p>A: {item.answer}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default freqAsked;
