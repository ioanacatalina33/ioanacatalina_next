import React from "react";
import { Modal } from "react-bootstrap";
import { SubscribeContent } from "../SubscribeContent";

import { ModalProps } from "./common";

export const ModalSubscribeDialog = ({ show, onHide }: ModalProps) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <img src="/img/subscribe.jpg" alt="Travel" width="100%" />
      <Modal.Body>
        <SubscribeContent onSubscribed={onHide} />
      </Modal.Body>
    </Modal>
  );
};
