import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import AppointmentsCard from "./AppointmentsCard";
import { Link } from "react-router-dom";

export default function AppointmentsPage() {
  const [appointmentData, setAppointmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/appointments.json"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Error in fetching appointments!");
      }

      // setAppointmentData(data);
      // const dataWithCompletedState = {...data, completed: 'false'}
      // setAppointmentData(Object.values(dataWithCompletedState));
      setAppointmentData(Object.values(data));
      setIsLoading(false);
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
          padding: { xs: "1rem", md: "2rem 5rem" },
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
        {/* Loading spinner */}
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

        {/* Rendering appointment cards */}
        {!isLoading &&
          appointmentData &&
          appointmentData.map((apt) => (
            <AppointmentsCard appointmentData={apt} completed={false} />
          ))}
        {!isLoading && !appointmentData && (
          <p>No appointment data available.</p>
        )}
        {/* <AppointmentsCard /> <br />
        <AppointmentsCard /> <br /> */}
        {/* <TwoByTwoGrid /> */}
      </Box>
      <br />
      <Divider /> <br />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "1rem", md: "2rem 5rem" },
          mb: "2rem",
        }}
      >
        <Typography variant="h4">Appointments completed</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {!isLoading &&
          appointmentData.completed &&
          appointmentData.map((apt) => (
            <AppointmentsCard appointmentData={apt} completed={true} />
          ))}
      </Box>
    </Box>
  );
}
