import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { addSubscriber } from "helpers/api";
import { AlbumType } from "types/enums";
import { sleep } from "helpers";

interface SubscribeContentProps {
  onSubscribed?: () => void;
}

export const SubscribeContent = ({ onSubscribed }: SubscribeContentProps) => {
  const [email, setEmail] = useState("");
  const [typeDance, setTypeDance] = useState(true);
  const [typeTravel, setTypeTravel] = useState(true);
  const [subscribed, setSubscribed] = useState(false);
  const [textAfterSubscription, setTextAfterSubscription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function subscribe() {
    setErrorMessage("");
    if (
      email.indexOf("@") === -1 ||
      email.indexOf(".") === -1 ||
      email.indexOf(" ") !== -1
    ) {
      setErrorMessage("Invalid email!");
    } else {
      setTextAfterSubscription("Subscribing...");
      setSubscribed(true);
      setEmail("");
      closeTimer();
    }
  }

  async function closeTimer() {
    const body = await addSubscriber(email, "non", typeTravel, typeDance);
    await sleep(1000);
    if (body.result !== 1) {
      setTextAfterSubscription(body.message);
      setTypeTravel(true);
      setTypeDance(true);
    } else {
      setTextAfterSubscription("Subscribed");
      setTypeTravel(true);
      setTypeDance(true);
    }
    await sleep(5000);
    onSubscribed && onSubscribed();
    await sleep(1000);
    setSubscribed(false);
    setTextAfterSubscription("");
  }

  function onEmailModified(evt) {
    setEmail(evt.target.value);
  }

  function handleChecked(evt) {
    if (evt.target.name === AlbumType.Dance) {
      const newState = !typeDance;
      setTypeDance(newState);
    } else if (evt.target.name === AlbumType.Travel) {
      const toggle = !typeTravel;
      setTypeTravel(toggle);
    }
  }

  return subscribed ? (
    textAfterSubscription === "Subscribed" ? (
      <div style={{ padding: "1rem 0rem 2rem 0rem" }}>
        {/* <div style={{ textAlign: 'left', fontSize: '1.2rem', padding: '0rem 0rem 0.5rem 0rem'}}>
                  <b>Almost finished..</b>
              </div>
              <b>To complete the subscription process, please click the link in the email we just sent you! </b>
              <br/><br/>In case you subscribed with <b>Gmail</b>, please check also the <b>'Social' Tab</b>
           */}
        <b>
          One more step before you&apos;re subscribed! Check your email for the
          confirmation link! Thank you!
        </b>
      </div>
    ) : (
      <div style={{ textAlign: "center", padding: "1rem 0rem" }}>
        {textAfterSubscription}
      </div>
    )
  ) : (
    <div style={{ padding: "1.4rem 0rem 1.4rem 0rem" }}>
      <div style={{ textAlign: "left", padding: "0rem 0rem 0.5rem 0rem" }}>
        Get notified when I post new albums!
      </div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          subscribe();
        }}
      >
        <Form.Group className="justify-content-md-center">
          <div
            style={{
              display: "flex",
              fontFamily: "Segoe UI, Roboto, Sans serif, Oxygen",
            }}
          >
            <Form.Control
              style={{ maxWidth: "20rem" }}
              type="text"
              name="email"
              value={email}
              onChange={onEmailModified}
              placeholder="Email"
            />

            <Button
              style={{
                textAlign: "center",
                padding: "0rem 1rem 0rem 1rem",
                margin: "0rem 0rem 0rem 0.5rem",
                fontSize: "1.1rem",
              }}
              onClick={() => subscribe()}
              variant="warning"
            >
              <b>Subscribe</b>
            </Button>
          </div>
        </Form.Group>
      </Form>

      {errorMessage !== "" && (
        <span
          style={{
            textAlign: "center",
            padding: "0.2rem 0rem",
            color: "red",
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};
