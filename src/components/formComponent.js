import React, { useState } from "react";
import { Formik } from "formik";
import { preRegisterSchema } from "./validation";
import { MessageModal } from "./modal/modal";
import { Spinner } from "react-bootstrap";
import { SignUpParagraph } from "../text/words";
import "./form-component.scss";

export function FormComponent({ color }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const preRegister = async ({ name, email }) => {
    try {
      const { REACT_APP_databaseURL } = process.env;
      const data = {
        institution: name,
        email,
      };

      const response = await fetch(REACT_APP_databaseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsLoading(false);
        setIsOpen(true);
      } else {
        alert("Something went wrong, please try again later.");
      }
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <MessageModal
        title="Success!"
        message="Thank you for signing up! Get ready to revolutionize the way you manage patient medical records."
        isOpen={isOpen}
        handleClose={handleClose}
      />
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={preRegisterSchema}
        onSubmit={(values, actions) => {
          setIsLoading(true);
          preRegister(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <div className="center-container" style={{ background: color }}>
            <h1
              className="is-size-2 has-text-weight-semibold"
              style={styles.text2}
            >
              Sign Up Today!
            </h1>
            <p style={styles.text}>{SignUpParagraph}</p>
            <div style={{ marignTop: 30 }}>
              <input
                onChange={props.handleChange("name")}
                value={props.values.name}
                style={styles.input}
                placeholder="Institution Name..."
                className="inputBox"
              />
              <p style={{ color: "red" }}>
                {props.touched.name && props.errors.name}
              </p>
              <input
                onChange={props.handleChange("email")}
                value={props.values.email}
                style={styles.input}
                placeholder="Institution Email..."
                className="inputBox"
              />
              <p style={{ color: "red" }}>
                {props.touched.email && props.errors.email}
              </p>
              <button
                onClick={props.handleSubmit}
                className="btn btn-primary btn-md"
                disabled={isLoading}
                style={{ margin: 5 }}
              >
                {!isLoading && "Sign Up"}
                {isLoading && <Spinner animation="grow" variant="primary" />}
              </button>
            </div>
            <p
              style={{
                marginTop: 10,
                color: "grey",
                padding: 30,
                paddingBottom: 5,
              }}
              className="is-size-5 has-text-weight-semibold"
            >
              contact us:{" "}
              <span style={{ color: "#053e5f" }}>
                contact@archivesoftware.co.za
              </span>
            </p>
            <p className="is-size-6" style={{ color: "white" }}>
              copyright <i class="fa fa-copyright" style={{ color: "white" }} />{" "}
              2023
            </p>
          </div>
        )}
      </Formik>
    </>
  );
}

const styles = {
  text: {
    color: "white",
    marginBottom: 10,
    padding: 30,
  },
  text2: {
    color: "white",
  },
  input: {
    borderRadius: 10,
    textAlign: "center",
    padding: 10,
  },
};
