import React from "react";
import classes from "./Popup.module.css";
import Backdrop from "../SideBar/Backdrop/Backdrop";

const Popup = (props) => {
  return (
    <>
      <div
        className={props.deleteClicked ? classes.PopupEnabled : classes.Popup}
      >
        <p>Confirm to Delete?</p>
        <button className={classes.button} onClick={props.deleteHandler}>
          YES
        </button>
        <button
          className={classes.button}
          onClick={() => props.showPopupHandler(false)}
        >
          NO
        </button>
      </div>
      <Backdrop show={props.deleteClicked} />
    </>
  );
};

export default Popup;