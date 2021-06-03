import React, { useState } from "react";

import { Event } from "helpers/traking";
import { ScreenType } from "helpers/enums";
import { useScreenType } from "hooks/utils";

import { ModalSubscribeDialog } from "../Modals";

interface SubscribePressedProps {
  parentPage: string;
}

export const SubscribeButton = ({ parentPage }: SubscribePressedProps) => {
  const { screenType } = useScreenType();

  const [showDialog, setShowDialog] = useState(false);

  function onSubscribePressed() {
    Event("SUBSCRIBE", "Subscribe first button pressed ", parentPage);
    setShowDialog(true);
  }

  return (
    <div>
      <ModalSubscribeDialog
        show={showDialog}
        onHide={() => setShowDialog(false)}
      />
      <div style={{ textAlign: "center", padding: "1.6rem 0rem" }}>
        <img
          style={{
            height: screenType !== ScreenType.Mobile ? "3.5rem" : "1.8rem",
            padding: "0rem 1rem 0rem 0rem",
          }}
          src="/img/arrow_right.png"
          alt=""
        />
        <span
          onClick={onSubscribePressed}
          style={{ fontSize: "1.4rem", color: "#292929" }}
          className="common-button subscribe-button-bordered"
        >
          <b>Subscribe</b>
        </span>
        <img
          style={{
            height: screenType !== ScreenType.Mobile ? "3.5rem" : "1.8rem",
            padding: "0rem 0rem 0rem 1rem",
          }}
          src="/img/arrow_left.png"
          alt=""
        />
      </div>
    </div>
  );
};
