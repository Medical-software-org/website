import React from "react";
import ContentBox from "./contentBox";
import BoxesContentBox from "./boxesContentBox";
import serversImage from "../images/servers.jpg";
import papersImage from "../images/papers.jpg";
import t from "../images/computer-3174729.jpg";
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
        text={WhoAreWeParagraph1}
        image={serversImage}
      />
      <ContentBox
        header="Increased efficiency"
        text={WhoAreWeParagraph2}
        image={papersImage}
        reverse={true}
        initialVisibility={false}
      />
      <ContentBox
        header="Our goal"
        color="white"
        text={OurGoalParagraph1}
        image={serversImage}
      />
      <ContentBox
        header="A promise you can count on"
        color="white"
        text={OurGoalParagraph2}
        image={t}
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
