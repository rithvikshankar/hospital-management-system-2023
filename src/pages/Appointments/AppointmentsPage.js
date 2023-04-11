import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import AppointmentsCard from "./AppointmentsCard";

export default function AppointmentsPage() {
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
        >
          Appointment
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <AppointmentsCard /> <br />
        <AppointmentsCard />
      </Box>
    </Box>
  );
}
