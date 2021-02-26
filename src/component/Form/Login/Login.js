import React from "react";
import classes from "../Form.module.css";

const Login = (props) => {
  return (
    <form onSubmit={props.submitHandler} className={classes.individualForm}>
      <h1>Login/SignIn</h1>
      <label className={classes.label}>User ID</label>
      <input className={classes.input} type="text" autoFocus />
      <label className={classes.label}>Password</label>
      <input className={classes.input} type="password" />
      <p style={{ color: "red" }}>{props.errState}</p>
      <button
        type="submit"
        className={
          !props.button
            ? [classes.Btn, classes.disabled].join(" ")
            : classes.Btn
        }
        disabled={!props.button}
      >
        {!props.button ? "Authenticating" : "SUBMIT"}
      </button>
    </form>
  );
};

export default Login;
