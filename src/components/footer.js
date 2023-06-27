import React from "react";
import { FormComponent } from "./formComponent";
import { FadeInWrapper } from "./fade-in-wrapper/fade-in-wrapper";

function Footer() {
  return (
    <FadeInWrapper>
      <div style={{ marginBottom: -50 }}>
        <FormComponent color="black" />
      </div>
    </FadeInWrapper>
  );
}

export default Footer;
