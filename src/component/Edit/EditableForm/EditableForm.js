import React from "react";
import classes from "./EditableForm.module.css";
import edit from "../../../message.svg";
import trash from "../../../can.svg";
import axios from "../../../axios";
import Popup from "../../Popup/Popup";
import Toast from "../../Toast/Toast";

const EditableForm = (props) => {
  const [clicked, setClicked] = React.useState(false);
  const [button, setButton] = React.useState(true);
  const [deleteClicked, setDeleteClicked] = React.useState(false);
  const [toastShow, setToastShow] = React.useState(false);
  const [toastState, setToastState] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      if (toastState) window.location.reload();
    }, 2000);
  }, [toastState]);

  let results = null;

  const result = Object.entries(props.formData);
  results = result.map((data) => (
    <div key={data[0]}>
      <label className={classes.label}>{data[0]}</label>
      <input className={classes.input} type="text" defaultValue={data[1]} />
    </div>
  ));

  const updateFormHandler = (e) => {
    e.preventDefault();
    setButton(false);
    if (props.form === "Accounts") {
      const data = {
        Cash_Balance: e.target[0].value,
        Cash_Pending: e.target[1].value,
        Claim: e.target[2].value,
        Door_Collection: e.target[3].value,
        Door_Delivery: e.target[4].value,
        Electricity: e.target[5].value,
        Flower: e.target[6].value,
        Others: e.target[7].value,
        Paid: e.target[8].value,
        Pay_to_driver: e.target[9].value,
        Rent: e.target[10].value,
        Salary: e.target[11].value,
        Stationary: e.target[12].value,
        Tea: e.target[13].value,
        Water: e.target[14].value,
      };
      axios
        .put(`forms/${props.id}/${props.form}.json`, data)
        .then((res) => {
          setButton(true);
          setToastShow(true);
          setToastState("success");
          props.StateHandler("edit");
        })
        .catch((err) => {
          setToastShow(true);
          setToastState("failure");
          setButton(true);
        });
    } else if (props.form === "Vehicle") {
      const data = {
        Checked_By: e.target[0].value,
        Collection_Charge: e.target[1].value,
        Diesel_expense: e.target[2].value,
        Ending_Kms: e.target[3].value,
        From: e.target[4].value,
        No_of_Item: e.target[5].value,
        Starting_Kms: e.target[6].value,
        To: e.target[7].value,
        Total_Kms: e.target[8].value,
      };
      axios
        .put(`forms/${props.id}/${props.form}.json`, data)
        .then((res) => {
          setButton(true);
          setToastShow(true);
          setToastState("success");
          props.StateHandler("edit");
        })
        .catch((err) => {
          setToastShow(true);
          setToastState("failure");
          setButton(true);
        });
    }
  };

  const deleteHandler = () => {
    axios
      .delete(`forms/${props.id}.json`)
      .then((res) => {
        setToastShow(true);
        setToastState("success");
        props.StateHandler("edit");
      })
      .catch((err) => {
        setToastShow(true);
        setToastState("failure");
      });
    showPopupHandler(false);
  };

  const showPopupHandler = (state) => {
    setDeleteClicked(state);
  };

  const editableForm = (
    <>
      <div className={classes.EditableForm}>
        <h4 className={classes.text}>{props.Date}</h4>
        <h4 className={classes.text}>{props.form}</h4>
        <img
          className={classes.editIcon}
          src={edit}
          alt=""
          onClick={() => setClicked((prevState) => !prevState)}
        />
        <img
          className={classes.editIcon}
          src={trash}
          alt=""
          onClick={() => showPopupHandler(true)}
        />
      </div>
      {clicked && (
        <form className={classes.Form} onSubmit={updateFormHandler}>
          {results}
          <button
            type="submit"
            className={
              !button ? [classes.Btn, classes.disabled].join(" ") : classes.Btn
            }
            disabled={!button}
          >
            {!button ? "Uploading..." : "SUBMIT"}
          </button>
        </form>
      )}
      {deleteClicked && (
        <Popup
          deleteHandler={deleteHandler}
          showPopupHandler={showPopupHandler}
          deleteClicked={deleteClicked}
        />
      )}
    </>
  );

  return (
    <>
      {editableForm}
      {toastShow && (
        <Toast
          toastState={toastState}
          content={
            toastState === "success"
              ? "Successfully Database Updated"
              : "Error Occured Try Again!!!"
          }
        />
      )}
    </>
  );
};

export default EditableForm;
