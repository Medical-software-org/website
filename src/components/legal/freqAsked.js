import React from "react";
import { Link } from "react-router-dom";
import { globalColors } from "../colors";
import { FormComponent } from "../formComponent";

function freqAsked({ scrollToEnd, scrollToSignUp, signUpRef, db }) {
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
          A: We offer a service to move all your paper records to our systems,{" "}
          <a
            style={{ textDecorationLine: "underline", color: "inherit" }}
            href="/"
            onClick={(e) => scrollToSignUp(e)}
          >
            sign up
          </a>{" "}
          to get additional info or{" "}
          <a
            href=""
            style={{ textDecorationLine: "underline", color: "inherit" }}
            onClick={(e) => scrollToEnd(e)}
          >
            send us a message
          </a>{" "}
          to ask a question or get a quotation.
        </p>
        <h4 style={{ textDecorationLine: "underline", marginTop: 10 }}>
          Q: When is this product officially launching?
        </h4>
        <p>
          A: The platform is set to launch in 2023.{" "}
          <a
            style={{ textDecorationLine: "underline", color: "inherit" }}
            href="/"
            onClick={(e) => scrollToSignUp(e)}
          >
            Sign up
          </a>{" "}
          to get pre-release dates, discounts and other offers.
        </p>
        <h4 style={{ textDecorationLine: "underline", marginTop: 10 }}>
          Q: How much will using Archive cost me?
        </h4>
        <p>
          A: We are currently exploring a pay as you use or fixed monthly
          installment payment policy for which pricing hasn't been set yet,{" "}
          <a
            style={{ textDecorationLine: "underline", color: "inherit" }}
            href=""
            onClick={(e) => scrollToEnd(e)}
          >
            let us know what would want to see implemented
          </a>{" "}
          or{" "}
          <a
            style={{ textDecorationLine: "underline", color: "inherit" }}
            href="/"
            onClick={(e) => scrollToSignUp(e)}
          >
            sign up
          </a>{" "}
          to recieve updates as they happen.
        </p>
        <h4 style={{ textDecorationLine: "underline", marginTop: 10 }}>
          Q: Is electronic record keeping safe?
        </h4>
        <p>
          A: Yes, in fact it is safer than having paper records. Please see{" "}
          <a
            target="_blank"
            href="https://www.adsc.com/blog/reasons-why-ehr-software-is-more-secure-than-paper-based-records#:~:text=Electronic%20health%20records%20are%20protected,helps%20you%20maintain%20pristine%20records."
            style={{ textDecorationLine: "underline", color: "inherit" }}
          >
            this article
          </a>{" "}
          for a more in depth explanation.
        </p>
        <h4 style={{ textDecorationLine: "underline", marginTop: 10 }}>
          Q: Will my data or the data of my patients be misused?
        </h4>
        <p>
          A: No, we will never misuse your data.{" "}
          <Link
            style={{ textDecorationLine: "underline", color: "inherit" }}
            to="/privacy"
          >
            Read more about our privacy policy
          </Link>{" "}
          to find out how we protect and use your data.
        </p>
      </div>
      <FormComponent db={db} color={globalColors.blue} signUpRef={signUpRef} />
    </div>
  );
}

export default freqAsked;
