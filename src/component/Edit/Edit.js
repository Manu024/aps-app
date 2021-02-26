import React from "react";
import axios from "../../axios";
import EditableForm from "./EditableForm/EditableForm";
import classes from "./Edit.module.css";
import Toast from "../Toast/Toast";
import Spinner from "../Spinner/Spinner";

const Edit = (props) => {
  const [uploadedData, setUploadedData] = React.useState([]);
  const [toastShow, setToastShow] = React.useState(false);
  const [toastState, setToastState] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("forms.json")
      .then((res) => {
        const fetchedFormData = [];
        for (let id in res.data) {
          fetchedFormData.push({
            id: id,
            ...res.data[id],
          });
        }
        setUploadedData(fetchedFormData);
      })
      .catch((err) => {
        setToastShow(true);
        setToastState("failure");
      });
  }, []);
  let results = <Spinner />;
  results = uploadedData.map((form) => {
    return (
      <EditableForm
        key={form.id}
        Date={form.Date}
        form={form.type}
        id={form.id}
        formData={form[form.type]}
        StateHandler={props.StateHandler}
      />
    );
  });
  return (
    <div className={classes.Edit}>
      <h1>Edit Form</h1>
      {results}
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
    </div>
  );
};

export default Edit;
