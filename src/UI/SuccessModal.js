import React, { useContext } from "react";

import { Box, Modal, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { MessageContext, MessageProvider } from "../Context/MessageContext";

export default function SuccessModal(props) {
  const { showMessage } = useContext(MessageContext);

  const modalStyle = {
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "green",
    border: "1px solid white",
    boxShadow: 24,
    color: "white",
    p: 4,
    borderRadius: "0.4rem",
  };

  return (
    <MessageProvider>
      <Modal open={showMessage}>
        <Box sx={modalStyle}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircleIcon fontSize="large" />
          </Box>

          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            align="center"
          >
            Success!
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            align="center"
          >
            {props.description}
          </Typography>
        </Box>
      </Modal>
    </MessageProvider>
  );
}
