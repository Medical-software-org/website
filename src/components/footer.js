import React from "react";
import { FormComponent } from "./formComponent";

function Footer({ signUpRef }) {
  return (
    <div style={styles.container}>
      <FormComponent color="black" signUpRef={signUpRef} />
    </div>
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
