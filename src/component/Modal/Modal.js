import React from "react";
import Backdrop from "../SideBar/Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
  React.useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("modal")) {
      const modalShow = JSON.parse(localStorage.getItem("modal"));
      const token = JSON.parse(localStorage.getItem("token"));
      const now = new Date();
      if (token.expiry > now.getTime() && modalShow.modalState) {
        props.modalClickedHandler(true);
      } else {
        localStorage.removeItem("modal");
        props.modalClickedHandler(false);
      }
    } else {
      props.modalClickedHandler(false);
    }
  });

  const modalHandler = (formStateChange) => {
    localStorage.setItem("modal", JSON.stringify({ modalState: true }));
    localStorage.setItem("form", JSON.stringify({ form: formStateChange }));
    props.modalClickedHandler(true);
    window.location.reload();
    props.StateHandler(formStateChange);
  };

  return (
    <>
      <div
        className={
          props.loginState && !props.modalClicked
            ? classes.ModalEnabled
            : classes.Modal
        }
      >
        <p>Choose form to render?</p>
        <button
          className={classes.button}
          onClick={() => modalHandler("accounts")}
        >
          Accounts
        </button>
        <button
          className={classes.button}
          onClick={() => modalHandler("vehicle")}
        >
          Vehicle
        </button>
      </div>
      <Backdrop show={props.loginState && !props.modalClicked} />
    </>
  );
};

export default Modal;
