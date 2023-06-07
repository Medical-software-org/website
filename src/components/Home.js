import React from "react";
import ContentBox from "./contentBox";
import BoxesContentBox from "./boxesContentBox";
import { whoAreWeP1, whoAreWeP2, goalP1, goalP2 } from "./text";
import serversImage from "../images/servers.jpg";
import papersImage from "../images/papers.jpg";
import { globalColors } from "./colors";
import { FormComponent } from "./formComponent";

function Home({ signUpRef }) {
  return (
    <div style={{ width: "100%" }}>
      <ContentBox
        header="Who are we?"
        color="white"
        text1={whoAreWeP1}
        text2={whoAreWeP2}
        image={serversImage}
      />
      <ContentBox
        header="Our goal."
        color={globalColors.grey}
        text1={goalP1}
        text2={goalP2}
        image={papersImage}
        reverse={true}
      />
      <BoxesContentBox
        heading="We care about your privacy!"
        subHeading="We are dedicated to keeping your data safe and secured, for more information follow the links below."
      />
      <FormComponent color="grey" signUpRef={signUpRef} />
    </div>
  );
}

export default Home;
