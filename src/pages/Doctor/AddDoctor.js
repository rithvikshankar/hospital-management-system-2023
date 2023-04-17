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

      {showMessage && <SuccessModal description="New doctor has been added." />}
    </Box>
  );
}
