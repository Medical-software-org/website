import React from "react";
import { globalColors } from "../colors";

function freqAsked() {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="center-container"
        style={{ color: globalColors.blue, padding: 10 }}
      >
        <h1 style={{ marginBottom: 50 }}>Frequently Asked Questions:</h1>
        <h4 style={{ textDecorationLine: "underline", marginTop: 10 }}>
          Q: What if I already have a lot of existing paper records?
        </h4>
        <p>
          A: We offer a service to move all your paper records to our systems,
          to get additional info or send us a message at
          help@archivesoftware.co.za to ask a question or get a quotation.
        </p>
      </div>
    </div>
  );
}

export default freqAsked;
