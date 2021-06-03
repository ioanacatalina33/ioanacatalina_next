import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
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

export const ModalShareDialog = ({ onHide, show }: ModalProps) => {
  const [copied, setCopied] = useState(false);

  var url = window.location.href;

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Share</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <FacebookShareButton url={url}>
            <FacebookIcon
              size={50}
              className="social-media-modal-buttons"
              round={true}
            />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon
              size={50}
              className="social-media-modal-buttons"
              round={true}
            />
          </TwitterShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon
              size={50}
              className="social-media-modal-buttons"
              round={true}
            />
          </WhatsappShareButton>
          <EmailShareButton url={url}>
            <EmailIcon
              size={50}
              className="social-media-modal-buttons"
              round={true}
            />
          </EmailShareButton>
        </div>

        <div style={{ margin: "1rem" }} className="align-center">
          <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
            <button className="col-12 filter-element" onClick={onHide}>
              Copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
        {copied && <div>Copied to clipboard!</div>}
      </Modal.Body>
      <Modal.Footer>
        <button className="filter-element" onClick={onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
