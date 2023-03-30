import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  Icon,
  IconButton,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Menu,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StethoscopeIcon from "../assets/stethoscopeIcon.svg";

export default function MainNavigation() {
  const [anchorEl, setAnchorEl] =
    (React.useState < null) | (HTMLElement > null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const DoctorIcon = (
    <Icon sx={{ fontSize: "inherit", color: "inherit" }}>
      <img
        alt="doctor"
        src={StethoscopeIcon}
        style={{ height: "21px", width: "21px" }}
      />
    </Icon>
  );

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
        >
          HMS
        </Typography> */}

        <Button startIcon={<LocalHospitalIcon />}>HMS</Button>
        <Stack direction="row" spacing={2} sx={{ paddingLeft: "1rem" }}>
          <Button sx={{ color: "#4a4a4b" }} startIcon={<HomeIcon />}>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </Button>
          {/* <Button startIcon={<PersonIcon />} sx={{ color: "#4a4a4b" }}>
            Patient
          </Button> */}
          <div>
            <Button
              id="basic-button"
              startIcon={<PersonIcon />}
              // aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              // aria-expanded={open ? "true" : undefined}
              // onClick={handleClick}
            >
              Patient
            </Button>
            <Menu
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
            </Menu>
          </div>
          <Button startIcon={DoctorIcon} sx={{ color: "#4a4a4b" }}>
            Doctor
          </Button>
          <Button startIcon={<EventAvailableIcon />} sx={{ color: "#4a4a4b" }}>
            Appointments
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
