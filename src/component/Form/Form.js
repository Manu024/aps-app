import React from "react";
import axios from "../../axios";
import jwt from "jsonwebtoken";
import Toast from "../Toast/Toast";
import Accounts from "./Accounts/Accounts";
import Vehicle from "./Vehicle/Vehicle";
import Login from "./Login/Login";

const Form = (props) => {
  const [errState, setErrState] = React.useState(null);
  const [button, setButton] = React.useState(true);
  const [toastShow, setToastShow] = React.useState(false);
  const [toastState, setToastState] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      if (toastState) window.location.reload();
    }, 2000);
  }, [toastState]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButton(false);
    const Date = e.target[0].value;
    let data = null;
    if (props.formState === "accounts") {
      data = {
        Date: Date,
        type: "Accounts",
        Accounts: {
          Tea: e.target[1].value,
          Pay_to_driver: e.target[2].value,
          Stationary: e.target[3].value,
          Door_Collection: e.target[4].value,
          Door_Delivery: e.target[5].value,
          Paid: e.target[6].value,
          Claim: e.target[7].value,
          Others: e.target[8].value,
          Water: e.target[9].value,
          Flower: e.target[10].value,
          Electricity: e.target[11].value,
          Salary: e.target[12].value,
          Rent: e.target[13].value,
          Cash_Pending: e.target[14].value,
          Cash_Balance: e.target[15].value,
        },
      };
      axios
        .post(`forms.json`, data)
        .then((res) => {
          setToastShow(true);
          setToastState("success");
          setButton(true);
        })
        .catch((err) => {
          setToastShow(true);
          setToastState("failure");
          setButton(true);
        });
    } else if (props.formState === "vehicle") {
      data = {
        Date: Date,
        type: "Vehicle",
        Vehicle: {
          Starting_Kms: e.target[1].value,
          Ending_Kms: e.target[2].value,
          From: e.target[3].value,
          To: e.target[4].value,
          Total_Kms: e.target[5].value,
          No_of_Item: e.target[6].value,
          Diesel_expense: e.target[7].value,
          Collection_Charge: e.target[8].value,
          Checked_By: e.target[9].value,
        },
      };
      axios
        .post(`forms.json`, data)
        .then((res) => {
          setToastShow(true);
          setToastState("success");
          setButton(true);
        })
        .catch((err) => {
          setToastShow(true);
          setToastState("failure");
          setButton(true);
        });
    } else {
      const id = e.target[0].value;
      const pwd = e.target[1].value;
      axios
        .get(`users/${id}.json`)
        .then((res) => {
          if (res.data === null) {
            setErrState("Invalid User");
            setButton(true);
          } else if (res.data.pwd == pwd) {
            setErrState(null);
            setButton(true);
            try {
              const token = jwt.sign(
                { id: id },
                process.env.REACT_APP_JWT_SECRET_KEY,
                { expiresIn: "2h" }
              );
              const expiryTime = new window.Date();
              localStorage.setItem(
                "token",
                JSON.stringify({
                  token,
                  expiry: expiryTime.getTime() + 1000 * 60 * 60 * 2,
                })
              );
              props.setloggedIn(true);
            } catch (err) {
              setToastShow(true);
              setToastState("failure");
              setButton(true);
            }
          } else {
            setErrState("Incorrect Password");
            setButton(true);
          }
        })
        .catch(err => {
          setToastShow(true);
          setToastState("failure");
          setButton(true);
        });
    }
  };

  let Form = null;
  if (props.formState === "accounts") {
    Form = <Accounts submitHandler={submitHandler} button={button} />;
  } else if (props.formState === "vehicle") {
    Form = <Vehicle submitHandler={submitHandler} button={button} />;
  } else if (props.formState === "login") {
    Form = (
      <Login
        submitHandler={submitHandler}
        button={button}
        errState={errState}
      />
    );
  }

  return (
    <>
      {Form}
      {toastShow && (
        <Toast
          toastState={toastState}
          content={
            toastState === "success"
              ? "Form Uploaded"
              : "Error Occured Try Again!!!"
          }
        />
      )}
    </>
  );
};

export default Form;
