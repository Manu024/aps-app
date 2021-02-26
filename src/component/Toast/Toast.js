import React from "react";
import classes from "./Toast.module.css";

const Toast = (props) => {
  return (
    <div
      className={
        props.toastState === "success"
          ? [classes.Toast, classes.ToastSuccess].join(" ")
          : [classes.Toast, classes.ToastFailure].join(" ")
      }
    >
      {props.content}
    </div>
  );
};

export default Toast;
