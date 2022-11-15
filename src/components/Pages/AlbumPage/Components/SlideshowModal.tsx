import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";

import { WEBSITE_PATH } from "helpers";
import { ModalBuyDigital, ModalShareDialog } from "components/UI/Modals";

interface SlideshowModalProps {
  currentIndex: number;
  images: string[];
  show: boolean;
  onClose: () => void;
  onLeft: () => void;
  onRight: () => void;
}

export const SlideshowModal = (props: SlideshowModalProps) => {
  const [modalShow, setModalShow] = useState(false);
  const [digitalShow, setDigitalShow] = useState(false);

  const [disabled, setDisable] = useState(false);

  function disableButtons() {
    window.focus();
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 300);
  }

  function modalClose() {
    setModalShow(false);
  }

  function digitalClose() {
    setDigitalShow(false);
  }

  const getFixedContent = useMemo(() => {
    return (
      <>
        {" "}
        {props.currentIndex !== undefined ? (
          <div className="modal-slideshow-counter">
            {props.currentIndex + 1 + "/" + props.images.length}
          </div>
        ) : (
          ""
        )}
        <button onClick={props.onClose} className="modal-slideshow-close">
          <i className="fa fa-close"></i>
        </button>
        {props.currentIndex !== 0 && (
          <button onClick={props.onLeft} className="modal-slideshow-left">
            <i className="fa fa-angle-left"></i>
          </button>
        )}
        {props.currentIndex !== props.images.length - 1 && (
          <button onClick={props.onRight} className="modal-slideshow-right">
            <i className="fa fa-angle-right"></i>
          </button>
        )}
        {props.currentIndex !== undefined && (
          <button
            onClick={() => setModalShow(true)}
            className="modal-slideshow-share"
          >
            <i className="fa fa-share-alt"></i>
          </button>
        )}{" "}
      </>
    );
  }, [props]);

  function escFunction(event) {
    if (event.keyCode === 27 && !modalShow) {
      props.onClose();
    }
    if (event.keyCode === 37 && !digitalShow) {
      props.onLeft();
    }
    if (event.keyCode === 39 && !digitalShow) {
      props.onRight();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    <div
      style={
        props.show
          ? { visibility: "visible", opacity: "1" }
          : { visibility: "hidden", opacity: "0" }
      }
      className="modal-slideshow"
    >
      {getFixedContent}

      <div className="modal-slideshow-container">
        <div className="modal-slideshow-class">
          {props.currentIndex !== undefined && (
            <img
              className="modal-slideshow-image"
              alt=""
              src={props.images[props.currentIndex]}
            />
          )}
        </div>
        {/* {props.currentIndex !== undefined && (
          <div className="div-buy-buttons-container">
            <div className="div-buy-buttons">
              <Button
                variant="warning"
                onClick={() => setDigitalShow(true)}
                style={{ outline: "none" }}
                className="button-buy"
              >
                Buy digital
              </Button>
              <Button
                variant="warning"
                disabled={disabled}
                onClick={disableButtons}
                style={{ outline: "none" }}
                data-cp-url={
                  WEBSITE_PATH + "/offline" + props.images[props.currentIndex]
                }
                className="button-buy"
              >
                Buy print
              </Button>

              <span className="div-buy-buttons-text">
                For large prints please first{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.shop.ioanacatalina.com/contact-me"
                >
                  contact me
                </a>
                .
              </span>
            </div>
          </div>
        )} */}
      </div>

      <ModalShareDialog show={modalShow} onHide={modalClose} />

      <ModalBuyDigital
        show={digitalShow}
        onHide={digitalClose}
        imgurl={props.images[props.currentIndex]}
      />
    </div>
  );
};

export default SlideshowModal;
