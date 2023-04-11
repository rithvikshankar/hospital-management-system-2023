import { Box, Grid, IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";

export default function AppointmentsCard(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",

        border: "1px solid grey",
        borderRadius: "0.2rem",
        width: "50%",
        mb: "1rem",
      }}
    >
      <Grid
        container
        // spacing={2}
        sx={{ width: "100%", justifyContent: "space-between" }}
      >
        <Grid item xs={8}>
          {/* Some details on the left */}
          <p>Some details here</p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            ml: "auto",
          }}
        >
          {/* Button on the right */}
          <IconButton
            variant="contained"
            sx={{
              height: "100%",
              borderRadius: "0px",
              backgroundColor: "#42a5f5",
              color: "white",
              "&:hover": {
                backgroundColor: "#2674b3",
              },
            }}
            // startIcon={<DoneIcon />}
          >
            <DoneIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
