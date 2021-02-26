import React from "react";
import classes from "../Form.module.css";

const Vehicle = (props) => {
  return (
    <form onSubmit={props.submitHandler} className={classes.individualForm}>
      <h1>Vehicle Form</h1>
      <label className={classes.label}>Date</label>
      <input className={classes.input} type="date" autoFocus />
      <label className={classes.label}>Starting Kms</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Ending Kms</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>From</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>To</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Total Kms</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>No of Item</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Diesel Expense</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Collection Charge</label>
      <input className={classes.input} type="text" />
      <label className={classes.label}>Checked By</label>
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

export default Vehicle;
