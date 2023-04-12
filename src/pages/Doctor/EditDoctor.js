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
import DoctorForm from "./DoctorForm";
import { MessageContext } from "../../Context/MessageContext";
import SuccessModal from "../../UI/SuccessModal";

export default function EditDoctor() {
  const [doctorData, setDoctorData] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { showMessage, setShowMessage } = useContext(MessageContext);

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
          spec: data[key].spec,
          contact: data[key].contact,
          fees: data[key].fees,
        });
      }
      // for (const key in data) {
      //   doctorNamesArray.push(data[key].name);
      // }

      setDoctorData(doctorDataArray);
      setIsLoading(false);
    };
    fetchDoctors();
  }, [doctorData.id]);

  useEffect(() => {
    if (selectedName) {
      setSelectedDoctor(
        doctorData.find((doctor) => doctor.name === selectedName)
      );
    }
  }, [doctorData, selectedName]);

  console.log(selectedDoctor);

  return (
    <Box sx={{ p: { xs: "1rem", md: "2rem 13rem" } }}>
      <Typography variant="h4" gutterBottom sx={{ mb: "2rem" }}>
        Edit Doctor
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
            Select the doctor:
          </Typography>
          <br />
          <FormControl sx={{ width: "21.8rem", mb: "2rem", mt: "1.5rem" }}>
            <InputLabel id="select-doctor-label">Doctor</InputLabel>
            <Select
              labelId="select-doctor-label"
              id="select-doctor"
              value={selectedName}
              label="Doctor"
              onChange={(e) => {
                setSelectedName(e.target.value);
              }}
            >
              {/* <MenuItem value="Cardiologist">Cardiologist</MenuItem>
            <MenuItem value="Neurologist">Neurologist</MenuItem>
            <MenuItem value="Dermatologist">Dermatologist</MenuItem> */}
              {doctorData.map(
                (doctor) =>
                  doctor.name && (
                    <MenuItem key={doctor.id} value={doctor.name}>
                      {doctor.name}
                    </MenuItem>
                  )
              )}
            </Select>
          </FormControl>
          {selectedDoctor && (
            <DoctorForm
              method="PUT"
              url={`https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/doctors/${selectedDoctor.id}.json`}
              selectedDoctor={selectedDoctor}
              type="edit"
              showMessage={showMessage}
              setShowMessage={setShowMessage}
            />
          )}
        </Box>
      )}
      {showMessage && (
        <SuccessModal description="Doctor details have been modified." />
      )}
    </Box>
  );
}
