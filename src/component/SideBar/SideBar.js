import React from "react";
import classes from "./SideBar.module.css";
import Backdrop from "./Backdrop/Backdrop";

const SideBar = (props) => {
  const clickedHandler = (state) => {
    props.stateHandler(state);
    props.showSideBar();
  };

  return (
    <>
      <div className={props.clicked ? classes.sideBarEnabled : classes.sideBar}>
        <div className={classes.menu}>
          <div
            className={props.clicked ? classes.change : classes.container}
            onClick={props.showSideBar}
          >
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
          </div>
          <span className={classes.welcomeText}>APS</span>
        </div>
        <p
          className={classes.sideBarText}
          onClick={() => clickedHandler("accounts")}
        >
          Accounts
        </p>
        <p
          className={classes.sideBarText}
          onClick={() => clickedHandler("vehicle")}
        >
          Vehicle{" "}
        </p>
        <p
          className={classes.sideBarText}
          onClick={() => clickedHandler("edit")}
        >
          Edit
        </p>
      </div>
      <Backdrop show={props.clicked} clicked={props.showSideBar} />
    </>
  );
};

export default SideBar;
