import React from "react";
import ContentBox from "./contentBox";
import { BoxesContentBox } from "./boxesContentBox";
import serversImage from "../images/servers_high_res.jpg";
import doctorImage from "../images/doctor_high_res.jpg";
import handImage from "../images/hand_high_res.jpg";
import vrImage from "../images/vr_high_res.jpg";
import {
  OurGoalParagraph1,
  OurGoalParagraph2,
  WhoAreWeParagraph1,
  WhoAreWeParagraph2,
} from "../text/words";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Archive is a digital medical record storage solution for your clinic, hospital or surgery. Browse through our website to find out more!"
        />
      </Helmet>
      <div style={{ width: "100%" }}>
        <ContentBox
          header="Who are we?"
          text={WhoAreWeParagraph1}
          image={doctorImage}
        />
        <ContentBox
          header="Increased efficiency"
          text={WhoAreWeParagraph2}
          image={vrImage}
          reverse
          initialVisibility={false}
        />
        <ContentBox
          header="Our goal"
          color="white"
          text={OurGoalParagraph1}
          image={handImage}
        />
        <ContentBox
          header="A promise you can count on"
          color="white"
          text={OurGoalParagraph2}
          image={serversImage}
          reverse
        />
        <BoxesContentBox />
      </div>
    </>
  );
}

export default Home;
