import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import doctorImage from "../assets/doctor-image-homepage.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    // <div>
    //   <h2 style={{ fontWeight: "350" }}>Hospital Management System</h2>
    // </div>
    <Box sx={{ p: "2rem 4rem" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="p"
            sx={{ fontWeight: "400", fontSize: "28px;" }}
            gutterBottom
          >
            Hospital Management System
          </Typography>
          <Typography variant="body1" sx={{ mt: "1rem", opacity: "0.8" }}>
            This app is built using ReactJs, Firebase and Material UI. It has
            basic functionality such as creating, editing and deleting patients,
            doctors and appointments.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: "2rem", mb: "0.5rem", fontSize: "1.2rem" }}
          >
            Feel free to try out the app by creating an appointment!
          </Typography>
          <Box
            sx={{
              padding: "1rem 0",
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              pr: "2rem",
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              sx={{ fontSize: "1.1rem", width: "50%" }}
              onClick={() => {
                navigate("/patient/add");
              }}
            >
              Create Patient
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: "1.1rem", width: "50%" }}
              onClick={() => {
                navigate("/appointments/add");
              }}
            >
              Create Appointment
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={doctorImage}
            style={{ width: "80%" }}
            alt="doctor_image_homepage"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
