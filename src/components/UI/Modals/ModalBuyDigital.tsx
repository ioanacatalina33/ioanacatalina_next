import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

import { sleep } from "helpers";
import { buyDigital } from "helpers/api";

import { ModalProps } from "./common";

interface ModalBuyDigital extends ModalProps {
  imgurl: string;
}

export const ModalBuyDigital = ({ onHide, show, imgurl }: ModalBuyDigital) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [textSubscribed, setTextSubscribed] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function sendRequest() {
    if (!email || !name || !message)
      setErrorMessage("Please complete all fields!");
    else {
      setErrorMessage("");
      closeTimer();
      setTextSubscribed("Sending...");
      setSent(true);
    }
  }

  async function closeTimer() {
    const body = await buyDigital(email, name, message, imgurl);
    await sleep(1000);
    if (body.result !== 1) {
      setTextSubscribed(body.message);
    } else {
      setTextSubscribed("sent");
    }
    await sleep(5000);
    onHide();
    await sleep(1000);
    setTextSubscribed("");
    setSent(false);
  }

  function onEmailModified(evt) {
    setEmail(evt.target.value);
  }

  function onMessageModified(evt) {
    setMessage(evt.target.value);
  }

  function onNameModified(evt) {
    setName(evt.target.value);
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <button onClick={onHide} className="modal-slideshow-close">
        <i className="fa fa-close"></i>
      </button>
      <Modal.Body>
        <div style={{ margin: "1rem", marginTop: "3rem" }}>
          <img
            src={imgurl}
            alt="Buy"
            style={{
              maxHeight: "30rem",
              height: "auto",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        {sent ? (
          textSubscribed === "sent" ? (
            <div
              style={{
                padding: "1rem 0rem 2rem 0rem",
                minHeight: "15rem",
                textAlign: "center",
              }}
            >
              <b>Thanks for contacting me! I will try to get back soon!</b>
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "1rem 0rem",
                minHeight: "15rem",
              }}
            >
              {textSubscribed}
            </div>
          )
        ) : (
          <div
            style={{ padding: "1.4rem 0rem 1.4rem 0rem", textAlign: "left" }}
          >
            <div style={{ textAlign: "left", padding: "0rem 1rem 1rem 1rem" }}>
              <div>Currently this photo cannot be purchased online.</div>
              <div style={{ fontSize: "1.2rem", marginTop: "0.7rem" }}>
                <b>
                  Contact me to make a request! <br />
                  Price: 9.99 &#8364;
                </b>
              </div>
            </div>
            <Form>
              <div className="d-flex flex-sm-row flex-column">
                <div
                  className="form-group"
                  style={{ flexGrow: 1, padding: "0rem 1rem 0rem 1rem" }}
                >
                  <label htmlFor="name">Your email*</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={onEmailModified}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div
                  className="form-group"
                  style={{ flexGrow: 1, padding: "0rem 1rem 0rem 1rem" }}
                >
                  <label htmlFor="InputEmail">Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={onNameModified}
                  />
                </div>
              </div>

              <div
                className="form-group"
                style={{ padding: "0rem 1rem 0rem 1rem" }}
              >
                <label htmlFor="message">Message*</label>
                <textarea
                  rows={2}
                  className="form-control"
                  value={message}
                  onChange={onMessageModified}
                ></textarea>
              </div>

              <div
                style={{
                  textAlign: "center",
                  padding: "0rem 0rem 0rem 0rem",
                  margin: "1rem 0rem 0rem 0rem",
                }}
              >
                <Button onClick={() => sendRequest()} variant="warning">
                  Send request
                </Button>
              </div>
            </Form>
            {errorMessage !== "" && (
              <div
                style={{
                  textAlign: "center",
                  padding: "0.2rem 0rem",
                  color: "red",
                }}
              >
                {errorMessage}
              </div>
            )}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};
