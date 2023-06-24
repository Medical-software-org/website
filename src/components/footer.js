import React from "react";
import { FormComponent } from "./formComponent";
import { FadeInWrapper } from "./fade-in-wrapper/fade-in-wrapper";

function Footer({ signUpRef }) {
  return (
    <FadeInWrapper>
      <div style={styles.container}>
        <FormComponent color="black" signUpRef={signUpRef} />
      </div>
    </FadeInWrapper>
  );
}

const styles = {
  container: {
    marginBottom: -50,
    background: "black",
    color: "white",
    diaplay: "flex",
    textAlign: "center",
    paddingTop: 50,
  },
  rowContainer: {
    diaplay: "flex",
    flexDirection: "row",
    textAlign: "center",
    padding: 10,
  },
};

export default Footer;
