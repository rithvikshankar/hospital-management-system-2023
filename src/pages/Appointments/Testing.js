// import { Box, Grid, Typography } from "@mui/material";
// import React from "react";

// export default function TwoByTwoGrid() {
//   return (
//     <Grid container sx={{ border: "1px solid grey", p: "0" }}>
//       <Grid container xs={12} sx={{}}>
//         <Grid item xs={7} sx={{}}>
//           {/* Top left content */}
//           <Typography>Top left</Typography>
//         </Grid>
//         {/* <Grid
//           item
//           xs={5}
//           sx={{
//             display: "flex",
//             justifyContent: "flex-end",
//             textAlign: "left",
//           }}
//         > */}
//         {/* Top right content */}
//         {/* <Typography>Top right</Typography>
//         </Grid> */}

//         <Box sx={{ alignSelf: "flex-end", textAlign: "left" }}>
//           <Typography>Top right</Typography>
//         </Box>
//       </Grid>

//       <Grid container xs={12}>
//         <Grid item xs={7} sx={{}}>
//           {/* Bottom left content */}
//           <Typography>Bottom left</Typography>
//         </Grid>
//         {/* <Grid
//           item
//           xs={5}
//           sx={{
//             display: "flex",
//             justifyContent: "flex-end",
//             textAlign: "left",
//           }}
//         > */}
//         {/* Bottom right content */}
//         {/* <Typography>Bottom right</Typography>
//         </Grid> */}
//         <Box
//           sx={{ alignSelf: "flex-end", textAlign: "left", minWidth: "500px" }}
//         >
//           <Typography>Bottom right</Typography>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

// import { Grid, Typography } from "@mui/material";
// import React from "react";

// export default function TwoByTwoGrid() {
//   return (
//     <Grid
//       container
//       sx={{ border: "1px solid grey", p: "0", justifyContent: "flex-end" }}
//     >
//       <Grid container xs={7}>
//         <Grid item xs={12}>
//           {/* Top left content */}
//           <Typography>Top left</Typography>
//         </Grid>
//         <Grid item xs={12}>
//           {/* Bottom left content */}
//           <Typography>Bottom left</Typography>
//         </Grid>
//       </Grid>

//       <Grid container xs={5}>
//         <Grid item xs={12}>
//           {/* Top right content */}
//           <Typography>Top right</Typography>
//         </Grid>
//         <Grid item xs={12}>
//           {/* Bottom right content */}
//           <Typography>Bottom right</Typography>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

// import { Grid, Typography } from "@mui/material";
// import React from "react";

// export default function TwoByTwoGrid() {
//   return (
//     <Grid container sx={{ border: "1px solid grey", p: "0" }}>
//       <Grid item xs={7}>
//         {/* Top left content */}
//         <Typography>Top left</Typography>
//         {/* Bottom left content */}
//         <Typography sx={{ mt: "1rem" }}>Bottom left</Typography>
//       </Grid>
//       <Grid
//         item
//         xs={5}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           pl: "1rem",
//         }}
//       >
//         {/* Top right content */}
//         <Typography>Top right</Typography>
//         {/* Bottom right content */}
//         <Typography sx={{ mt: "1rem" }}>Bottom right</Typography>
//       </Grid>
//     </Grid>
//   );
// }

import { Grid, Typography } from "@mui/material";
import React from "react";

export default function TwoByTwoGrid() {
  return (
    <Grid container sx={{ border: "1px solid grey", p: "0" }}>
      <Grid container sx={{ justifyContent: "flex-end" }}>
        <Grid item xs={7}>
          {/* Top left content */}
          <Typography>Top left</Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            textAlign: "left",
          }}
        >
          {/* Top right content */}
          <Typography>Top right</Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ justifyContent: "flex-end" }}>
        <Grid item xs={7}>
          {/* Bottom left content */}
          <Typography>Bottom left</Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            textAlign: "left",
          }}
        >
          {/* Bottom right content */}
          <Typography>Bottom right</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
