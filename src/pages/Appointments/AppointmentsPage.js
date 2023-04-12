import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import AppointmentsCard from "./AppointmentsCard";
// import TwoByTwoGrid from "./Testing";
import { Link } from "react-router-dom";

export default function AppointmentsPage() {
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch(
        "https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/appointments.json"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Error in fetching appointments!");
      }

      // setAppointmentData(data);
      setAppointmentData(Object.values(data));
    };

    fetchAppointments();
  }, []);

  console.log(appointmentData);

  return (
    <Box sx={{ padding: { xs: "1rem", md: "2rem 13rem" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: { xs: "1rem", md: "2rem 5 rem" },
          mb: "2rem",
        }}
      >
        <Typography variant="h4">Appointments scheduled</Typography>
        <Link to="/appointments/add" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddIcon />}
          >
            Appointment
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {appointmentData &&
          appointmentData.map((apt) => (
            <AppointmentsCard appointmentData={apt} />
          ))}
        {/* <AppointmentsCard /> <br />
        <AppointmentsCard /> <br /> */}
        {/* <TwoByTwoGrid /> */}
      </Box>
    </Box>
  );
}
