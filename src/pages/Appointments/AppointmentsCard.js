import { Box, Grid, IconButton, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";

export default function AppointmentsCard(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid grey",
        borderRadius: "0.2rem",
        width: "50%",
        mb: "1rem",
      }}
    >
      <Grid container sx={{ width: "100%", flexGrow: 1 }}>
        <Grid item container xs={8} sx={{ p: "0.5rem 1rem" }}>
          {/* Top */}
          <Grid item xs={10} sx={{}}>
            <Typography variant="p" sx={{ mb: "1rem", fontSize: "1.3rem" }}>
              {props.appointmentData.patient}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ mb: "1rem" }}>
            <Typography variant="p" sx={{ mb: "1rem", fontSize: "1.3rem" }}>
              {props.appointmentData.time}
            </Typography>
          </Grid>
          {/* Bottom */}
          <Grid item xs={10} sx={{}}>
            <Typography variant="p" sx={{}}>
              With {props.appointmentData.doctor}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="p" sx={{}}>
              ₹{props.appointmentData.fees}
            </Typography>
          </Grid>
        </Grid>
        {/* Button */}
        <Grid
          item
          container
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            // p: "0.5rem 1rem",
          }}
        >
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
          >
            <DoneIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

// import { Box, Grid, IconButton, Typography } from "@mui/material";
// import DoneIcon from "@mui/icons-material/Done";
// import React from "react";

// export default function AppointmentsCard(props) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         border: "1px solid grey",
//         borderRadius: "0.2rem",
//         width: "50%",
//         mb: "1rem",
//       }}
//     >
//       <Grid container sx={{ width: "100%", flexGrow: 1 }}>
//         <Grid item container xs={8} sx={{ p: "0.5rem 1rem" }}>
//           {/* Top */}
//           <Grid item xs={6}>
//             <Typography variant="p" sx={{ mb: "1rem", fontSize: "1.3rem" }}>
//               Patient Name
//             </Typography>
//           </Grid>
//           <Grid
//             item
//             xs={6}
//             sx={{ display: "flex", justifyContent: "flex-end" }}
//           >
//             <Typography variant="p" sx={{ mb: "1rem", fontSize: "1.3rem" }}>
//               Time
//             </Typography>
//           </Grid>
//           {/* Bottom */}
//           <Grid item xs={6}>
//             <Typography variant="p" sx={{}}>
//               With DoctorName
//             </Typography>
//           </Grid>
//           <Grid
//             item
//             xs={6}
//             sx={{ display: "flex", justifyContent: "flex-end" }}
//           >
//             <Typography variant="p" sx={{}}>
//               Fees
//             </Typography>
//           </Grid>
//         </Grid>
//         {/* Button */}
//         <Grid
//           item
//           container
//           xs={4}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//             // p: "0.5rem 1rem",
//           }}
//         >
//           <IconButton
//             variant="contained"
//             sx={{
//               height: "100%",
//               borderRadius: "0px",
//               backgroundColor: "#42a5f5",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#2674b3",
//               },
//             }}
//           >
//             <DoneIcon />
//           </IconButton>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
