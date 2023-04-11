// import React, { useReducer, useState } from "react";

// import {
//   Box,
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Modal,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";

// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const doctorReducer = (currentDetails, action) => {
//   switch (action.type) {
//     case "name":
//       return { ...currentDetails, name: action.name };
//     case "spec":
//       return { ...currentDetails, spec: action.spec };
//     case "contact":
//       return { ...currentDetails, contact: action.contact };
//     case "fees":
//       return { ...currentDetails, fees: action.fees };
//     case "reset":
//       return initialState;
//     default:
//       throw new Error("Default case reached");
//   }
// };

// const initialState = {
//   name: "",
//   spec: "",
//   contact: "",
//   fees: "",
// };

// const modalStyle = {
//   position: "absolute",
//   top: "12%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 250,
//   bgcolor: "green",
//   border: "1px solid white",
//   boxShadow: 24,
//   color: "white",
//   p: 4,
//   borderRadius: "1rem",
// };

// export default function AddDoctor() {
//   const [doctorState, dispatch] = useReducer(doctorReducer, initialState);
//   const [showMessage, setShowMessage] = useState(false);

//   const submitDoctors = async () => {
//     const response = await fetch(
//       "https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/doctors.json",
//       {
//         method: "POST",
//         body: JSON.stringify(doctorState),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.ok) {
//       console.log("Response is ok");
//       // setSubmitOk(true);
//       setShowMessage(true);
//       setTimeout(() => {
//         setShowMessage(false);
//       }, 1200);
//     }
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     console.log(
//       "name: ",
//       doctorState.name,
//       "specialization: ",
//       doctorState.spec,
//       "contact: ",
//       doctorState.contact,
//       "fees: ",
//       doctorState.fees,
//       "showMessage: ",
//       showMessage
//     );

//     submitDoctors();

//     dispatch({ type: "reset" });
//     // if (submitOk) {
//     //   setShowMessage(true);
//     //   setTimeout(() => {
//     //     setShowMessage(false);
//     //   }, 1200);
//     // }
//   };

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     if (submitOk) {
//   //       setShowMessage(true);
//   //     }
//   //   }, 1000);
//   //   return () => clearTimeout(timer);
//   // }, [submitOk]);

//   return (
//     <Box sx={{ padding: { xs: "1rem", md: "2rem 13rem" } }}>
//       <form onSubmit={submitHandler}>
//         <Typography variant="h4" gutterBottom sx={{ mb: "2rem" }}>
//           Create Doctor
//         </Typography>
//         <TextField
//           required
//           id="doctor-name"
//           label="Name"
//           variant="outlined"
//           value={doctorState.name}
//           inputProps={{
//             style: {
//               height: "1.1rem",
//               width: "20rem",
//             },
//           }}
//           sx={{ mb: "2rem" }}
//           onChange={(e) => {
//             dispatch({ type: "name", name: e.target.value });
//           }}
//         />
//         <br />
//         <FormControl sx={{ width: "21.8rem", mb: "2rem" }}>
//           <InputLabel id="doctor-spec-label">Specialization</InputLabel>
//           <Select
//             required
//             labelId="doctor-spec-label"
//             id="doctor-spec"
//             value={doctorState.spec}
//             label="Specialization"
//             onChange={(e) => {
//               dispatch({ type: "spec", spec: e.target.value });
//             }}
//           >
//             <MenuItem value="Cardiologist">Cardiologist</MenuItem>
//             <MenuItem value="Neurologist">Neurologist</MenuItem>
//             <MenuItem value="Dermatologist">Dermatologist</MenuItem>
//           </Select>
//         </FormControl>
//         <br />
//         <TextField
//           required
//           id="doctor-contact"
//           label="Contact"
//           variant="outlined"
//           value={doctorState.contact}
//           inputProps={{
//             style: {
//               height: "1.1rem",
//               width: "20rem",
//             },
//           }}
//           sx={{ mb: "2rem" }}
//           onChange={(e) => {
//             dispatch({ type: "contact", contact: e.target.value });
//           }}
//         />
//         <br />
//         <TextField
//           required
//           id="doctor-fees"
//           label="Fees"
//           variant="outlined"
//           value={doctorState.fees}
//           inputProps={{
//             style: {
//               // height: "1.1rem",
//               width: "20rem",
//             },
//           }}
//           sx={{ mb: "2rem" }}
//           onChange={(e) => {
//             dispatch({ type: "fees", fees: e.target.value });
//           }}
//         />
//         <br />
//         <Button type="submit" size="large" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//       {showMessage && (
//         <Modal
//           // open={open}
//           open={showMessage}
//           // onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={modalStyle}>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <CheckCircleIcon fontSize="large" />
//             </Box>
//             <Typography id="modal-modal-title" variant="h5" component="h2">
//               Success!
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//               New doctor has been added.
//             </Typography>
//           </Box>
//         </Modal>
//         // <p>Hello</p>
//       )}
//     </Box>
//   );
// }

import { Box } from "@mui/material";

import React, { useContext } from "react";
import DoctorForm from "./DoctorForm";
import SuccessModal from "../../UI/SuccessModal";

import { MessageContext } from "../../Context/MessageContext";

// const modalStyle = {
//   position: "absolute",
//   top: "12%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 250,
//   bgcolor: "green",
//   border: "1px solid white",
//   boxShadow: 24,
//   color: "white",
//   p: 4,
//   borderRadius: "0.4rem",
// };

export default function AddDoctor() {
  // const [showMessage, setShowMessage] = useState(false);
  const { showMessage, setShowMessage } = useContext(MessageContext);

  return (
    <Box sx={{ padding: { xs: "1rem", md: "2rem 13rem" } }}>
      <DoctorForm
        showMessage={showMessage}
        setShowMessage={setShowMessage}
        url="https://hospital-management-syst-8c88d-default-rtdb.asia-southeast1.firebasedatabase.app/doctors.json"
        method="POST"
        title="Create Doctor"
      />

      {showMessage && (
        <SuccessModal description="New doctor has been added." />
      )}
    </Box>
  );
}
