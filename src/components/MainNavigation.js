import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  Icon,
  Typography,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StethoscopeIcon from "../assets/stethoscopeIcon.svg";
import styled from "@emotion/styled";

export default function MainNavigation() {
  // const [anchorEl, setAnchorEl] =
  //   (React.useState < null) | (HTMLElement > null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

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
        {/* <IconButton size="large" aria-label="logo" sx={{ color: "black" }}>
          <LocalHospitalIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: "#4a4a4b" }}
        >small
          HMS
        </Typography> */}

        {/* <Button
          sx={{ fontSize: "28px" }}
          startIcon={<LocalHospitalIcon sx={{ fontSize: "5px" }} />}
        >
          HMS
        </Button> */}

        {/* <HospitalButton>
          <Link to='/'></Link>
          <LocalHospitalIcon sx={{ color: "black" }} />
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "#4a4a4b" }}
          >
            HMS
          </Typography>
        </HospitalButton> */}

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
          {/* <Button sx={{ color: "#4a4a4b" }} startIcon={<HomeIcon />}>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </Button> */}

          <TitleCaseButton startIcon={<HomeIcon />}>
            <Link style={styles.link} to="/">
              Home
            </Link>
          </TitleCaseButton>
          {/* <Button startIcon={<PersonIcon />} sx={{ color: "#4a4a4b" }}>
            Patient
          </Button> */}
          <div>
            <TitleCaseButton startIcon={<PersonIcon />}>
              <Link style={styles.link} to="/patient">
                Patient
              </Link>
            </TitleCaseButton>
            {/* <Menu
              id="basic-menu"
              // anchorEl={}
              // open={open}
              // onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu> */}
          </div>
          <TitleCaseButton startIcon={DoctorIcon}>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to="/doctor"
            >
              Doctor
            </Link>
          </TitleCaseButton>
          {/* <TitleCaseButton
            startIcon={<EventAvailableIcon />}
            sx={{ color: "#4a4a4b" }}
          >
            Appointments
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
