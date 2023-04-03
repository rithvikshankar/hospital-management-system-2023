import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function EditPatient() {
  const [patientNames, setPatientNames] = useState([]);
  const [selectedName, setSelectedName] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch(
        "https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/patients.json"
      );

      if (!response.ok) {
        throw new Error("Error fetching patient data (EditPatient)!");
      }
      const data = await response.json();

      const patientData = [];
      // for (const key in data) {
      //   patientData.push({
      //     id: key,
      //     name: data[key].name,
      //     age: data[key].age,
      //     contact: data[key].contact,
      //     address: data[key].address,
      //   });
      // }
      for (const key in data) {
        patientData.push(data[key].name);
      }
      setPatientNames(patientData);
    };
    fetchPatients();
  }, []);

  return (
    <Box sx={{ p: { xs: "1rem", md: "2rem 13rem" } }}>
      <Typography variant="h4" gutterBottom sx={{ mb: "2rem" }}>
        Edit Patient
      </Typography>
      <Box>
        <Typography variant="p" gutterBottom sx={{ mb: "2rem" }}>
          Select the patient:
        </Typography>
        <br />
        <FormControl sx={{ width: "21.8rem", mb: "2rem", mt: "1.5rem" }}>
          <InputLabel id="select-patient-label">Select</InputLabel>
          <Select
            labelId="select-patient-label"
            id="select-patient"
            value={selectedName}
            label="Select"
            onChange={(e) => {
              setSelectedName(e.target.value);
            }}
          >
            {/* <MenuItem value="Cardiologist">Cardiologist</MenuItem>
            <MenuItem value="Neurologist">Neurologist</MenuItem>
            <MenuItem value="Dermatologist">Dermatologist</MenuItem> */}
            {patientNames.map((name) => (
              <MenuItem key={Math.random()} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
