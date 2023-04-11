import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useReducer } from "react";

const doctorReducer = (currentDetails, action) => {
  switch (action.type) {
    case "name":
      return { ...currentDetails, name: action.name };
    case "spec":
      return { ...currentDetails, spec: action.spec };
    case "contact":
      return { ...currentDetails, contact: action.contact };
    case "fees":
      return { ...currentDetails, fees: action.fees };
    case "reset":
      return initialState;
    default:
      throw new Error("Default case reached");
  }
};

const initialState = {
  name: "",
  spec: "",
  contact: "",
  fees: "",
};

export default function PatientForm(props) {
  const [doctorState, dispatch] = useReducer(doctorReducer, initialState);

  const submitDoctors = async () => {
    const response = await fetch(props.url, {
      method: props.method,
      body: JSON.stringify(doctorState),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Response is ok");
      // setSubmitOk(true);
      props.setShowMessage(true);
      setTimeout(() => {
        props.setShowMessage(false);
      }, 1200);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    submitDoctors();
    dispatch({ type: "reset" });
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h4" gutterBottom sx={{ mb: "2rem" }}>
        {props.title}
      </Typography>
      <TextField
        required
        id="doctor-name"
        label="Name"
        variant="outlined"
        value={doctorState.name}
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
      <FormControl sx={{ width: "21.8rem", mb: "2rem" }}>
        <InputLabel id="doctor-spec-label">Specialization</InputLabel>
        <Select
          required
          labelId="doctor-spec-label"
          id="doctor-spec"
          value={doctorState.spec}
          label="Specialization"
          onChange={(e) => {
            dispatch({ type: "spec", spec: e.target.value });
          }}
        >
          <MenuItem value="Cardiologist">Cardiologist</MenuItem>
          <MenuItem value="Neurologist">Neurologist</MenuItem>
          <MenuItem value="Dermatologist">Dermatologist</MenuItem>
        </Select>
      </FormControl>
      <br />
      <TextField
        required
        id="doctor-contact"
        label="Contact"
        variant="outlined"
        value={doctorState.contact}
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
        id="doctor-fees"
        label="Fees"
        variant="outlined"
        value={doctorState.fees}
        inputProps={{
          style: {
            // height: "1.1rem",
            width: "20rem",
          },
        }}
        sx={{ mb: "2rem" }}
        onChange={(e) => {
          dispatch({ type: "fees", fees: e.target.value });
        }}
      />
      <br />
      <Button type="submit" size="large" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
