import { Button, TextField, Typography } from "@mui/material";
import React, { useReducer } from "react";

const patientReducer = (currentDetails, action) => {
  switch (action.type) {
    case "set_name":
      return {
        ...currentDetails,
        name: {
          value: action.payload,
          error: "",
        },
      };
    case "set_age":
      return {
        ...currentDetails,
        age: {
          value: action.payload,
          error: "",
        },
      };
    case "set_contact":
      return {
        ...currentDetails,
        contact: {
          value: action.payload,
          error: "",
        },
      };
    case "set_address":
      return {
        ...currentDetails,
        address: {
          value: action.payload,
          error: "",
        },
      };
    case "reset":
      return initialState;
    case "set_error": //field is name, age, contact or address, action.payload.error is the error message
      return {
        ...currentDetails,
        [action.payload.field]: {
          ...currentDetails[action.payload.field],
          error: action.payload.error,
        },
      };
    default:
      throw new Error("Default case reached");
  }
};

let initialState = {
  name: { value: "", error: "" },
  age: { value: "", error: "" },
  contact: { value: "", error: "" },
  address: { value: "", error: "" },
};

export default function PatientForm(props) {
  const [patientState, dispatch] = useReducer(
    patientReducer,
    props.type === "edit" ? props.initialState : initialState // If the type is edit, initial state is the current values of the fields, not ''
  );

  const submitPatients = async () => {
    const response = await fetch(props.url, {
      method: props.method,
      body: JSON.stringify({
        name: patientState.name.value,
        age: patientState.age.value,
        contact: patientState.contact.value,
        address: patientState.address.value,
      }),
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
    // if (patientState.name.error || patientState.age.error || ...)
    if (Object.values(patientState).some((prop) => prop.error)) {
      alert(
        "One or more fields are invalid. Please enter valid details and try again."
      );
    } else {
      submitPatients();
      dispatch({ type: "reset" });
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    dispatch({
      type: `set_${name}`,
      payload: value,
    });
  };

  const blurHandler = (event) => {
    const { name, value } = event.target;
    const contactPattern = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
    const agePattern = /^[1-9][0-9]*$/;

    if (value.trim() === "") {
      dispatch({
        type: "set_error",
        payload: {
          field: name,
          error: "This field is required.",
        },
      });
    } else if (name === "contact" && !contactPattern.test(value)) {
      dispatch({
        type: "set_error",
        payload: {
          field: name,
          error: "Contact number must be valid.",
        },
      });
    } else if (
      name === "age" &&
      (parseFloat(value) <= 0 ||
        isNaN(parseFloat(value)) ||
        !agePattern.test(value))
    ) {
      dispatch({
        type: "set_error",
        payload: {
          field: name,
          error: "Age must be a valid number",
        },
      });
    }
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
        name="name"
        error={Boolean(patientState.name.error)}
        helperText={patientState.name.error}
        variant="outlined"
        value={patientState.name.value}
        inputProps={{
          style: {
            height: "1.1rem",
            width: "20rem",
          },
        }}
        sx={{ mb: "2rem" }}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <br />
      <TextField
        required
        id="patient-age"
        name="age"
        label="Age"
        variant="outlined"
        value={patientState.age.value}
        error={Boolean(patientState.age.error)}
        helperText={patientState.age.error}
        inputProps={{
          style: {
            height: "1.1rem",
            width: "20rem",
          },
        }}
        sx={{ mb: "2rem" }}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <br />
      <TextField
        required
        id="patient-contact"
        name="contact"
        label="Contact"
        variant="outlined"
        value={patientState.contact.value}
        error={Boolean(patientState.contact.error)}
        helperText={patientState.contact.error}
        inputProps={{
          style: {
            height: "1.1rem",
            width: "20rem",
          },
        }}
        sx={{ mb: "2rem" }}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <br />
      <TextField
        required
        multiline
        rows={4}
        id="patient-address"
        name="address"
        label="Address"
        variant="outlined"
        value={patientState.address.value}
        error={Boolean(patientState.address.error)}
        helperText={patientState.address.error}
        inputProps={{
          style: {
            width: "20rem",
          },
        }}
        sx={{ mb: "2rem" }}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <br />
      <Button type="submit" size="large" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
