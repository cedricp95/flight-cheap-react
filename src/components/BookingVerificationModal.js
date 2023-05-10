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
import CircularProgress from "@mui/material/CircularProgress";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { post_booking_users,post_booking_payment,post_booking_final } from "@/api/auth";

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

function BookingVerificationModal(props) {

  const handleClose = () => {
    setEmail("");
    props.setIsModal(false);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isFetching, setLoading] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


 


  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const validateAccountBooking = () => {
   

    setLoading(true);
    const bookingUserInfo = window.localStorage.getItem("booking_user_info"); 
    const bookingPaymentInfo = window.localStorage.getItem("booking_payment_info"); 
  
    post_booking_final({
      "booking_token": bookingUserInfo,
      "payment_token": bookingPaymentInfo
    }).then(val=>{
      console.log(val,"::val");
      setLoading(false);
      
      //props.router.push('/bookings');
    }).catch((e) => {
      alert(e.response.data.detail);
    });
    console.log(props.booking);
  };
  
  const handleButtonClick = () => {
   props.router.push('/bookings');
  };
  
  useEffect(() => {
    validateAccountBooking();
    validateEmail();
  }, [email]);


  return (
    <>
      <Modal
        open={props.isModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate autoComplete="off">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Verify your booking
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Fly high, pay low with our unbeatable flight deals. Subscribe now!
          </Typography>
          
          { isFetching ?<></>:<>
              <Box>


              </Box>
              <Button
              color="primary"
              size="large"
              variant="contained"
              component="a"
              sx={{ mt: 5 }}
              onClick={handleButtonClick}
              >
              Submit you info
              </Button>
          </>}
          
          <FormHelperText sx={{ mt: 2 }} id="my-helper-text">
            We'll never share your email/number.
          </FormHelperText>
        </Box>
      </Modal>
    </>
  );
}

export default BookingVerificationModal;
