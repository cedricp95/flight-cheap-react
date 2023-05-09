import * as React from "react";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormHelperText from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import { Container, Grid, Card } from "@mui/material";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function NotificationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [error, setError] = useState(null);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    validatePhone();
  }, [phone]);

  useEffect(() => {
    validateEmail();
  }, [email]);

  const validatePhone = () => {
    if (phone?.length < 5) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const [phone, setValue] = React.useState("");

  return (
    <>
      <Box component="section" sx={{ display: "flex", overflow: "hidden" }}>
        <Container
          sx={{
            mt: 4,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Button
            color="info"
            size="large"
            variant="contained"
            component="a"
            onClick={handleOpen}
          >
            Get Notified
          </Button>
        </Container>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Get latest deals!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Fly high, pay low with our unbeatable flight deals. Subscribe now!
          </Typography>

          <Typography sx={{ mt: 2, mb: 1 }} component="label">
            SMS
          </Typography>
          <PhoneInput
            placeholder="SMS"
            country={"ph"}
            value={phone}
            onChange={(phone) => setValue(phone)}
          />
          <TextField
            sx={{ mt: 4, width: "90%" }}
            id="input-with-icon-textfield"
            label="Email Address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Button
            color="primary"
            size="large"
            variant="contained"
            component="a"
            href=""
            sx={{ mt: 5 }}
          >
            Get Notified
          </Button>
          <FormHelperText sx={{ mt: 2 }} id="my-helper-text">
            We'll never share your email/number.
          </FormHelperText>
        </Box>
      </Modal>
    </>
  );
}

export default NotificationModal;
