import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useReducer, useState } from "react";

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

const modalStyle = {
  position: "absolute",
  top: "12%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "green",
  border: "1px solid white",
  boxShadow: 24,
  color: "white",
  p: 4,
  borderRadius: "0.4rem",
};

export default function AddPatient() {
  const [patientState, dispatch] = useReducer(patientReducer, initialState);
  const [showMessage, setShowMessage] = useState(false);

  const submitPatients = async () => {
    const response = await fetch(
      "https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/patients.json",
      {
        method: "POST",
        body: JSON.stringify(patientState),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // if (response.ok) {
    //   console.log("Response is ok");
    //   setSubmitOk(true);
    // }

    if (response.ok) {
      console.log("Response is ok");
      // setSubmitOk(true);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 1200);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    submitPatients();

    // if (submitOk) {
    //   setShowMessage(true);
    //   setTimeout(() => {
    //     setShowMessage(false);
    //   }, 1200);
    // }
  };

  return (
    <Box sx={{ padding: { xs: "1rem", md: "2rem 13rem" } }}>
      <form noValidate onSubmit={submitHandler}>
        <Typography variant="h4" gutterBottom sx={{ mb: "2rem" }}>
          Create Patient
        </Typography>
        <TextField
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
          multiline
          rows={4}
          id="patient-address"
          label="Address"
          variant="outlined"
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
      {showMessage && (
        <Modal
          // open={open}
          open={showMessage}
          // onClose={handleClose}
        >
          <Box sx={modalStyle}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon fontSize="large" />
            </Box>

            <Typography id="modal-modal-title" variant="h5" component="h2">
              Success!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              New patient has been added.
            </Typography>
          </Box>
        </Modal>
      )}
    </Box>
  );
}
