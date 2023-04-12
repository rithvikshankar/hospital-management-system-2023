import { Button, TextField, Typography } from "@mui/material";
import React, { useReducer } from "react";

const patientReducer = (currentDetails, action) => {
  switch (action.type) {
    case "name":
      return { ...currentDetails, name: action.name };
    case "age":
      return { ...currentDetails, age: action.age };
    case "contact":
      return { ...currentDetails, contact: action.contact };
    case "address":
      return { ...currentDetails, address: action.address };
    case "reset":
      return initialState;
    default:
      throw new Error("Default case reached");
  }
};

const initialState = {
  name: "",
  age: "",
  contact: "",
  address: "",
};

export default function PatientForm(props) {
  const [patientState, dispatch] = useReducer(patientReducer, initialState);

  const submitPatients = async () => {
    const response = await fetch(props.url, {
      method: props.method,
      body: JSON.stringify(patientState),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Response is ok");
      props.setShowMessage(true);
      setTimeout(() => {
        props.setShowMessage(false);
      }, 1200);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    submitPatients();
    dispatch({ type: "reset" });
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h4" gutterBottom sx={{ mb: "2rem" }}>
        {props.title}
      </Typography>
      <TextField
        required
        id="patient-name"
        label="Name"
        variant="outlined"
        value={patientState.name}
        inputProps={{
          style: {
            height: "1.1rem",
            width: "20rem",
          },
        }}
        sx={{ mb: "2rem" }}
        onChange={(e) => {
          dispatch({ type: "name", name: e.target.value });
        }}
      />
      <br />
      <TextField
        required
        id="patient-age"
        label="Age"
        variant="outlined"
        value={patientState.age}
        inputProps={{
          style: {
            height: "1.1rem",
            width: "20rem",
          },
        }}
        sx={{ mb: "2rem" }}
        onChange={(e) => {
          dispatch({ type: "age", age: e.target.value });
        }}
      />
      <br />
      <TextField
        required
        id="patient-contact"
        label="Contact"
        variant="outlined"
        value={patientState.contact}
        inputProps={{
          style: {
            height: "1.1rem",
            width: "20rem",
          },
        }}
        sx={{ mb: "2rem" }}
        onChange={(e) => {
          dispatch({ type: "contact", contact: e.target.value });
        }}
      />
      <br />
      <TextField
        required
        multiline
        rows={4}
        id="patient-address"
        label="Address"
        variant="outlined"
        // value={
        //   props.type === "edit"
        //     ? props.selectedPatient.address
        //     : patientState.address
        // }
        value={patientState.address}
        inputProps={{
          style: {
            // height: "1.1rem",
            width: "20rem",
          },
        }}
        sx={{ mb: "2rem" }}
        onChange={(e) => {
          dispatch({ type: "address", address: e.target.value });
        }}
      />
      <br />
      <Button type="submit" size="large" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
