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
      <div style={{ marginBottom: 20 }} className="px-6">
        <div className="center-container" style={{ color: globalColors.blue }}>
          <h1
            className="is-size-2 has-text-weight-semibold"
            style={{ marginBottom: 40 }}
          >
            Frequently Asked Questions
          </h1>
          {frequentlyAsked.map((item) => {
            return (
              <>
                <h4
                  className="is-size-4 has-text-weight-semibold"
                  style={{ marginTop: 10 }}
                >
                  Q: {item.question}
                </h4>
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
