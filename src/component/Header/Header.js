import React from "react";
import logo from "../../aps logo.gif";
import classes from "./Header.module.css";
import Form from "../Form/Form";
import SideBar from "../SideBar/SideBar";
import Modal from "../Modal/Modal";
import Edit from "../Edit/Edit";

const Header = () => {
  const [formState, setFormState] = React.useState();
  const [loginState, setLogin] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [modalClicked, setModalClicked] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"));
      const now = new Date();
      if (token.expiry < now.getTime()) {
        localStorage.removeItem("token");
        setFormState("login");
        setLogin(false);
      } else {
        setLogin(true);
        if (localStorage.getItem("form")) {
          setModalClicked(true);
          const formState = JSON.parse(localStorage.getItem("form"));
          setFormState(formState.form);
        }
      }
    } else {
      setFormState("login");
      setLogin(false);
    }
  }, []);

  const StateHandler = (state) => {
    localStorage.setItem("form", JSON.stringify({ form: state }));
    setFormState(state);
  };

  const showSideBar = () => {
    setClicked((prevState) => !prevState);
  };

  const loggedInHandler = (data) => {
    setLogin(data);
  };

  const modalClickedHandler = (state) => {
    setModalClicked(state);
  };

  return (
    <>
      <div className={classes.Header}>
        <div className={classes.FlexContainer}>
          <img className={classes.Logo} src={logo} alt="" />
          <h4
            onClick={() => StateHandler("login")}
            disabled={loginState}
            id={loginState ? classes.disable : null}
            className={[classes.button, classes.Btn].join(" ")}
          >
            Login
          </h4>
        </div>
        <div className={classes.FlexContainer}>
          <h4 onClick={() => StateHandler("accounts")} className={classes.h4}>
            Accounts
          </h4>
          <h4 onClick={() => StateHandler("vehicle")} className={classes.h4}>
            Vehicle
          </h4>
          <h4 onClick={() => StateHandler("edit")} className={classes.h4}>
            Edit
          </h4>
        </div>
        <div className={classes.container} onClick={showSideBar}>
          <div className={classes.bar1}></div>
          <div className={classes.bar2}></div>
          <div className={classes.bar3}></div>
        </div>
      </div>
      <Form
        formState={formState}
        setloggedIn={loggedInHandler}
        loginState={loginState}
        modalClicked={modalClicked}
      />
      <SideBar
        clicked={clicked}
        showSideBar={showSideBar}
        stateHandler={StateHandler}
      />
      <Modal
        StateHandler={StateHandler}
        loginState={loginState}
        modalClickedHandler={modalClickedHandler}
        modalClicked={modalClicked}
      />
      {formState === "edit" && <Edit StateHandler={StateHandler} />}
    </>
  );
};

export default Header;
