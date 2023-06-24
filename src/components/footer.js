import React from "react";
import { FormComponent } from "./formComponent";
import { FadeInWrapper } from "./fade-in-wrapper/fade-in-wrapper";

function Footer({ signUpRef }) {
  return (
    <FadeInWrapper>
      <div style={{ marginBottom: -50 }}>
        <FormComponent color="black" signUpRef={signUpRef} />
      </div>
    </FadeInWrapper>
  );
}

export default Footer;
