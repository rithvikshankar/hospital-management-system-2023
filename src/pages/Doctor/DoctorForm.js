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
    case "set_name":
      return {
        ...currentDetails,
        name: {
          value: action.payload,
          error: "",
        },
      };
    case "set_spec":
      return {
        ...currentDetails,
        spec: {
          value: action.payload,
          error: "",
        },
      };
    case "set_contact":
      return {
        ...currentDetails,
        contact: { value: action.payload, error: "" },
      };
    case "set_fees":
      return {
        ...currentDetails,
        fees: {
          value: action.payload,
          error: "",
        },
      };
    case "reset":
      return initialState;
    case "set_error": //field is name, spec, contact or fees, action.payload.error is the error message
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

const initialState = {
  name: { value: "", error: "" },
  spec: { value: "", error: "" },
  contact: { value: "", error: "" },
  fees: { value: "", error: "" },
};

export default function DoctorForm(props) {
  const [doctorState, dispatch] = useReducer(doctorReducer, initialState);

  const submitDoctors = async () => {
    const response = await fetch(props.url, {
      method: props.method,
      body: JSON.stringify({
        name: doctorState.name.value,
        spec: doctorState.spec.value,
        contact: doctorState.contact.value,
        fees: doctorState.fees.value,
      }),
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
    // if (doctorState.name.error || doctorState.spec.error || ...)
    if (Object.values(doctorState).some((prop) => prop.error)) {
      alert(
        "One or more fields are invalid. Please enter valid details and try again."
      );
    } else {
      submitDoctors();
      dispatch({ type: "reset" });
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name);
    dispatch({
      type: `set_${name}`, // MIGHT GIVE A PROBLEM, MIGHT NEED TO USE STRING
      payload: value,
    });
    // console.log(value);
  };

  const blurHandler = (event) => {
    const { name, value } = event.target;
    const contactPattern = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;

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
      name === "fees" &&
      (parseFloat(value) <= 0 || isNaN(parseFloat(value)))
    ) {
      dispatch({
        type: "set_error",
        payload: {
          field: name,
          error: "Fees must be a valid positive number",
        },
      });
    }

    // console.log(doctorState.fees.error);
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h4" gutterBottom sx={{ mb: "2rem" }}>
        {props.title}
      </Typography>
      <TextField
        required
        id="doctor-name"
        name="name"
        label="Name"
        // error={doctorState.name.error ? true : false}
        error={Boolean(doctorState.name.error)}
        helperText={doctorState.name.error}
        variant="outlined"
        value={doctorState.name.value}
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
      <FormControl sx={{ width: "21.8rem", mb: "2rem" }}>
        <InputLabel id="doctor-spec-label">Specialization</InputLabel>
        <Select
          required
          labelId="doctor-spec-label"
          id="doctor-spec"
          name="spec"
          value={doctorState.spec.value}
          error={Boolean(doctorState.spec.error)}
          helperText={doctorState.spec.error}
          label="Specialization"
          onChange={changeHandler}
          onBlur={blurHandler}
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
        name="contact"
        label="Contact"
        variant="outlined"
        value={doctorState.contact.value}
        error={Boolean(doctorState.contact.error)}
        helperText={doctorState.contact.error}
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
        id="doctor-fees"
        name="fees"
        label="Fees"
        variant="outlined"
        value={doctorState.fees.value}
        // error={doctorState.fees.error ? true : false}
        error={Boolean(doctorState.fees.error)}
        helperText={doctorState.fees.error}
        inputProps={{
          style: {
            // height: "1.1rem",
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
