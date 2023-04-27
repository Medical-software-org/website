import React, { useState } from "react";
import { global } from "./globalStyles";
import { Formik } from "formik";
import { msgSchema } from "./validation";
import { MessageModal } from "./modal/modal";
import { Spinner } from "react-bootstrap";

function Footer({ reference }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const sendMessage = async (values) => {
    const data = {
      name: values.name,
      message: values.msg + "\n\nemail: " + values.email,
    };

    fetch("https://formsubmit.co/ajax/contact@archivesoftware.co.za", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        setIsOpen(true);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <MessageModal
        title="Success!"
        message="Your message has been sent successfully."
        isOpen={isOpen}
        handleClose={handleClose}
      />
      <div style={styles.container}>
        <h1 ref={reference} id="mes">
          Send us a message
        </h1>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Formik
            initialValues={{ email: "", name: "", msg: "" }}
            validationSchema={msgSchema}
            onSubmit={(values, actions) => {
              setIsLoading(true);
              sendMessage(values);
              actions.resetForm();
            }}
          >
            {(props) => (
              <React.Fragment>
                <input
                  onChange={props.handleChange("name")}
                  value={props.values.name}
                  style={global.input}
                  placeholder="Full Name..."
                  className="inputBox"
                />
                <br />
                <p style={{ color: "red" }}>
                  {props.touched.name && props.errors.name}
                </p>
                <input
                  onChange={props.handleChange("email")}
                  value={props.values.email}
                  style={global.input}
                  placeholder="Email..."
                  className="inputBox"
                />
                <br />
                <p style={{ color: "red" }}>
                  {props.touched.email && props.errors.email}
                </p>
                <textarea
                  onChange={props.handleChange("msg")}
                  value={props.values.msg}
                  style={global.input}
                  placeholder="Message..."
                  className="inputBox"
                />
                <br />
                <p style={{ color: "red" }}>
                  {props.touched.msg && props.errors.msg}
                </p>
                <button
                  onClick={props.handleSubmit}
                  className="btn btn-primary"
                >
                  {!isLoading && "send"}
                  {isLoading && <Spinner animation="grow" variant="primary" />}
                </button>
              </React.Fragment>
            )}
          </Formik>
        </div>
        <div style={styles.rowContainer}>
          <h5 style={{ display: "inline-block", color: "white" }}>
            copyright 2022
          </h5>
          <i
            className="fa fa-copyright"
            style={{ color: "white", marginLeft: 8 }}
          ></i>
        </div>
      </div>
    </>
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
