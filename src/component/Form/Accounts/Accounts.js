import React from "react";
import classes from "../Form.module.css";

const Accounts = (props) => {
  return (
    <form onSubmit={props.submitHandler} className={classes.individualForm}>
      <h1>Accounts Form</h1>
      <label className={classes.label}>Date</label>
      <input className={classes.input} type="date" autoFocus />
      <label className={classes.label}>Tea</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Pay to Driver</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Stationary</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Door Collection</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Door Delivery</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Paid</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Claim</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Others</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Water</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Flower</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Electricity</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Salary</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Rent</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Cash Pending</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Cash Balance</label>
      <input className={classes.input} type="text" />
      <button
        type="submit"
        className={
          !props.button
            ? [classes.Btn, classes.disabled].join(" ")
            : classes.Btn
        }
        disabled={!props.button}
      >
        {!props.button ? "Uploading..." : "SUBMIT"}
      </button>
    </form>
  );
};

export default Accounts;
