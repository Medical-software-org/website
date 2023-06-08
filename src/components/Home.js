import React from "react";
import ContentBox from "./contentBox";
import BoxesContentBox from "./boxesContentBox";
import serversImage from "../images/servers.jpg";
import papersImage from "../images/papers.jpg";
import { globalColors } from "./colors";
import {
  OurGoalParagraph1,
  OurGoalParagraph2,
  WhoAreWeParagraph1,
  WhoAreWeParagraph2,
} from "../common/words";

function Home() {
  return (
    <div style={{ width: "100%" }}>
      <ContentBox
        header="Who are we?"
        color="white"
        text1={WhoAreWeParagraph1}
        text2={WhoAreWeParagraph2}
        image={serversImage}
      />
      <ContentBox
        header="Our goal."
        color={globalColors.grey}
        text1={OurGoalParagraph1}
        text2={OurGoalParagraph2}
        image={papersImage}
        reverse={true}
      />
      <BoxesContentBox
        heading="We care about your privacy!"
        subHeading="We are dedicated to keeping your data safe and secured, for more information follow the links below."
      />
    </div>
  );
}

export default Home;
