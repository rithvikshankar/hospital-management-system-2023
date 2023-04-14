import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { MessageContext } from "../../Context/MessageContext";
import SuccessModal from "../../UI/SuccessModal";

export default function AddAppointment() {
  const [patientNames, setPatientNames] = useState([]);
  const [selectedPatientName, setSelectedPatientName] = useState("");
  // const [selectedPatient, setSelectedPatient] = useState([]);
  const [doctorNames, setDoctorNames] = useState([]);
  const [selectedDoctorName, setSelectedDoctorName] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState([]);
  const [aptTime, setAptTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { showMessage, setShowMessage } = useContext(MessageContext);

  useEffect(() => {
    const fetchPatients = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/patients.json`
      );

      if (!response.ok) {
        throw new Error("Error fetching patient data (EditPatient)!");
      }
      const data = await response.json();

      const patientDataArray = [];

      for (const key in data) {
        patientDataArray.push({ id: data[key].id, name: data[key].name });
      }

      setPatientNames(patientDataArray);
      setIsLoading(false);
    };
    fetchPatients();
  }, []);

  // useEffect(() => {
  //   if (selectedPatientName) {
  //     setSelectedPatient(
  //       patientNames.find((patient) => patient.name === selectedPatientName)
  //     );
  //   }
  // }, [patientNames, selectedPatientName]);

  useEffect(() => {
    const fetchDoctors = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/doctors.json`
      );

      if (!response.ok) {
        throw new Error("Error fetching doctor data (EditDoctor)!");
      }
      const data = await response.json();

      const doctorDataArray = [];

      for (const key in data) {
        doctorDataArray.push({
          id: key,
          name: data[key].name,
          fees: data[key].fees,
        });
      }
      // for (const key in data) {
      //   doctorNamesArray.push(data[key].name);
      // }

      setDoctorNames(doctorDataArray);
      setIsLoading(false);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    if (selectedDoctorName) {
      setSelectedDoctor(
        doctorNames.find((doctor) => doctor.name === selectedDoctorName)
      );
    }
  }, [doctorNames, selectedDoctorName]);

  const submitAppointments = async () => {
    const response = await fetch(
      "https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/appointments.json",
      {
        method: "POST",
        body: JSON.stringify({
          patient: selectedPatientName,
          doctor: selectedDoctorName,
          time: aptTime,
          fees: selectedDoctor ? selectedDoctor.fees : "",
          completed: "",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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

    submitAppointments();
    // dispatch({ type: "reset" });
    setSelectedPatientName("");
    setSelectedDoctorName("");
    setAptTime("");
  };

  return (
    <Box sx={{ p: { xs: "1rem", md: "2rem 13rem" } }}>
      <Typography variant="h4" gutterBottom sx={{ mb: "2rem" }}>
        Create Appointment
      </Typography>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircularProgress size="1.5rem" />
          <p style={{ marginLeft: "0.5rem" }}>Loading...</p>
        </Box>
      )}
      {!isLoading && (
        <Box>
          <Typography variant="p" gutterBottom sx={{ mb: "2rem" }}>
            Select a patient:
          </Typography>
          <br />
          <form onSubmit={submitHandler}>
            <FormControl sx={{ width: "21.8rem", mb: "2rem", mt: "1.5rem" }}>
              <InputLabel id="select-patient-label">Patient</InputLabel>
              <Select
                required
                labelId="select-patient-label"
                id="select-patient"
                value={selectedPatientName}
                label="Patient"
                onChange={(e) => {
                  setSelectedPatientName(e.target.value);
                }}
              >
                {/* <MenuItem value="Cardiologist">Cardiologist</MenuItem>
            <MenuItem value="Neurologist">Neurologist</MenuItem>
            <MenuItem value="Dermatologist">Dermatologist</MenuItem> */}
                {patientNames.map(
                  (patient) =>
                    patient.name && (
                      <MenuItem key={patient.id} value={patient.name}>
                        {patient.name}
                      </MenuItem>
                    )
                )}
              </Select>
            </FormControl>
            <br />
            <Typography variant="p" gutterBottom sx={{ mb: "2rem" }}>
              Select a doctor:
            </Typography>
            <br />
            <FormControl sx={{ width: "21.8rem", mb: "2rem", mt: "1.5rem" }}>
              <InputLabel id="select-doctor-label">Doctor</InputLabel>
              <Select
                required
                labelId="select-doctor-label"
                id="select-doctor"
                value={selectedDoctorName}
                label="Doctor"
                onChange={(e) => {
                  setSelectedDoctorName(e.target.value);
                }}
              >
                {/* <MenuItem value="Cardiologist">Cardiologist</MenuItem>
            <MenuItem value="Neurologist">Neurologist</MenuItem>
            <MenuItem value="Dermatologist">Dermatologist</MenuItem> */}
                {doctorNames.map(
                  (doctor) =>
                    doctor.name && (
                      <MenuItem key={doctor.id} value={doctor.name}>
                        {doctor.name}
                      </MenuItem>
                    )
                )}
              </Select>
            </FormControl>
            <br />
            <Typography variant="p" gutterBottom sx={{ mb: "2rem" }}>
              Select a time:
            </Typography>
            <br />
            <br />
            <TextField
              required
              name="time"
              label=""
              type="time"
              format="HH:mm:ss"
              value={aptTime}
              onChange={(e) => {
                setAptTime(e.target.value);
              }}
              sx={{ width: "21.8rem", mb: "1.5rem", display: "block" }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Submit
            </Button>
          </form>
        </Box>
      )}
      {showMessage && (
        <SuccessModal description="New appointment has been created." />
      )}
    </Box>
  );
}
