import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import Input from "@mui/material/Input";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// import ReactPhoneInput from "react-phone-input-mui";
// import { TextField, withStyles } from "@material-ui/core";

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

  const [phone, setValue] = React.useState("");

  return (
    <>
      <Button
        color="secondary"
        size="large"
        variant="contained"
        component="a"
        onClick={handleOpen}
      >
        Get Notified
      </Button>
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