import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import PatientForm from "./PatientForm";
import { MessageContext } from "../../Context/MessageContext";
import SuccessModal from "../../UI/SuccessModal";

export default function EditPatient() {
  const [patientData, setPatientData] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
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
        patientDataArray.push({
          id: key,
          name: data[key].name,
          age: data[key].age,
          contact: data[key].contact,
          address: data[key].address,
        });
      }

      setPatientData(patientDataArray);
      setIsLoading(false);
    };
    fetchPatients();
  }, [patientData.id, selectedName]);

  useEffect(() => {
    if (selectedName) {
      setSelectedPatient(
        patientData.find((patient) => patient.name === selectedName)
      );
    }
  }, [patientData, selectedName]);

  return (
    <Box sx={{ p: { xs: "1rem", md: "2rem 13rem" } }}>
      <Typography variant="h4" gutterBottom sx={{ mb: "2rem" }}>
        Edit Patient
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
            Select the patient:
          </Typography>
          <br />
          <FormControl sx={{ width: "21.8rem", mb: "2rem", mt: "1.5rem" }}>
            <InputLabel id="select-patient-label">Patient</InputLabel>
            <Select
              labelId="select-patient-label"
              id="select-patient"
              value={selectedName}
              label="Patient"
              onChange={(e) => {
                setSelectedName(e.target.value);
              }}
            >
              {patientData.map(
                (patient) =>
                  patient.name && (
                    <MenuItem key={patient.id} value={patient.name}>
                      {patient.name}
                    </MenuItem>
                  )
              )}
            </Select>
          </FormControl>
          {selectedPatient && (
            <PatientForm
              method="PUT"
              url={`https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/patients/${selectedPatient.id}.json`}
              selectedPatient={selectedPatient}
              type="edit"
              showMessage={showMessage}
              setShowMessage={setShowMessage}
              initialState={{
                name: { value: selectedPatient.name, error: "" },
                age: { value: selectedPatient.age, error: "" },
                contact: { value: selectedPatient.contact, error: "" },
                address: { value: selectedPatient.address, error: "" },
              }}
            />
          )}
        </Box>
      )}
      {showMessage && (
        <SuccessModal description="Patient details have been modified." />
      )}
    </Box>
  );
}
