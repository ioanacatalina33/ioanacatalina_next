import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

import { ModalProps } from "./common";
import { ShareButtons } from "./ShareButtons";

export const ModalShareDialog = ({ onHide, show }: ModalProps) => {
  const [copied, setCopied] = useState(false);
  let url: string = "";

  useEffect(() => {
    url = window.location.href;
  }, []);

  function closeModal() {
    setCopied(false);
    onHide();
  }

  return (
    <Modal
      show={show}
      onHide={closeModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Share</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ShareButtons all />

        <div style={{ marginTop: "1rem" }} className="align-center">
          <button
            className="col-12 filter-element"
            onClick={() => {
              navigator.clipboard.writeText(url);
              setCopied(true);
            }}
          >
            Copy to clipboard
          </button>
        </div>
        {copied && (
          <div
            style={{
              textAlign: "center",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Copied to clipboard!
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button className="filter-element" onClick={closeModal}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
