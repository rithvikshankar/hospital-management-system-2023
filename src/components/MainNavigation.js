import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HomeIcon from "@mui/icons-material/Home";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  AppBar,
  Button,
  Icon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import StethoscopeIcon from "../assets/stethoscopeIcon.svg";

export default function MainNavigation() {
  const [patientAnchorEl, setPatientAnchorEl] = useState(null);
  const [doctorAnchorEl, setDoctorAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClickPatient = (event) => {
    setPatientAnchorEl(event.currentTarget);
  };

  const handleClosePatient = () => {
    setPatientAnchorEl(null);
  };

  const handleClickDoctor = (event) => {
    setDoctorAnchorEl(event.currentTarget);
  };

  const handleCloseDoctor = () => {
    setDoctorAnchorEl(null);
  };

  // const buttonRef = useImperativeHandle(null);

  const TitleCaseButton = styled(Button)({
    textTransform: "capitalize",
    fontWeight: 400,
    fontFamily: "Open Sans, sans-serif",
    letterSpacing: "1px",
    fontSize: "16px",
    color: "#4a4a4b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  // const TitleCaseSelectButton = styled(Button)({
  //   textTransform: "capitalize",
  //   fontWeight: 400,
  //   fontFamily: "Open Sans, sans-serif",
  //   letterSpacing: "1px",
  //   fontSize: "16px",
  //   color: "#4a4a4b",
  //   display: "flex",
  // });

  const styles = {
    link: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "inherit",
      padding: "0.5rem 0",
    },
  };

  const DoctorIcon = (
    <Icon sx={{ fontSize: "inherit", color: "#4a4a4b" }}>
      <img
        alt="doctor"
        src={StethoscopeIcon}
        style={{ height: "21px", width: "21px" }}
      />
    </Icon>
  );

  const HospitalButton = styled(Button)({
    "& .MuiSvgIcon-root": {
      fontSize: "28px",
      width: "auto",
    },
  });

  return (
    <AppBar position="static" sx={{ backgroundColor: "#f8f9fa" }} elevation={0}>
      <Toolbar
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <HospitalButton>
          <Link to="/" style={styles.link}>
            <LocalHospitalIcon sx={{ color: "black" }} />
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, color: "#4a4a4b" }}
            >
              HMS
            </Typography>
          </Link>
        </HospitalButton>

        <Stack direction="row" spacing={2} sx={{ paddingLeft: "1rem" }}>
          <TitleCaseButton startIcon={<HomeIcon />}>
            <Link style={styles.link} to="/">
              Home
            </Link>
          </TitleCaseButton>
          <div>
            <Button
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                fontFamily: "Open Sans, sans-serif",
                letterSpacing: "1px",
                fontSize: "16px",
                color: "#4a4a4b",
                display: "flex",
              }}
              id="patient-button"
              startIcon={<PersonIcon />}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleClickPatient}
            >
              <Link style={styles.link} to="#">
                Patient
              </Link>
            </Button>
            <Menu
              id="patient-menu"
              anchorEl={patientAnchorEl}
              open={Boolean(patientAnchorEl)}
              onClose={handleClosePatient}
              MenuListProps={{
                "aria-labelledby": "patient-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/patient/add");
                  handleClosePatient();
                }}
              >
                Create Patient
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/patient/edit");
                  handleClosePatient();
                }}
              >
                Edit Patient
              </MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                fontFamily: "Open Sans, sans-serif",
                letterSpacing: "1px",
                fontSize: "16px",
                color: "#4a4a4b",
                display: "flex",
              }}
              id="doctor-button"
              startIcon={DoctorIcon}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleClickDoctor}
            >
              <Link style={styles.link} to="#">
                Doctor
              </Link>
            </Button>
            <Menu
              // ref={buttonRef}
              id="doctor-menu"
              anchorEl={doctorAnchorEl}
              open={Boolean(doctorAnchorEl)}
              onClose={handleCloseDoctor}
              MenuListProps={{
                "aria-labelledby": "doctor-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/doctor/add");
                  handleCloseDoctor();
                }}
              >
                Create Doctor
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/doctor/edit");
                  handleCloseDoctor();
                }}
              >
                Edit Doctor
              </MenuItem>
            </Menu>
          </div>
          {/* <TitleCaseButton startIcon={DoctorIcon}>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to="/doctor"
            >
              Doctor
            </Link>
          </TitleCaseButton> */}

          <TitleCaseButton startIcon={<EventAvailableIcon />}>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to="/appointments"
            >
              Appointments
            </Link>
          </TitleCaseButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
