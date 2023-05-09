import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";

import { Grid, TextField, FormControlLabel, Checkbox, Container, Typography, Box, Button } from "@mui/material";


// import { useBookingContext } from "@/context/booking";
import { useRouter } from 'next/router'

import BookingItem from "@/components/BookingItem";

function SelectFlight() {
  const router = useRouter()
    
 
  return (
    <Layout>
     <Container
        sx={{
          pt: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justifyContent="flex-end"
          sx={{mb: 10}}
        >
          <Grid item>
            <Button
              color="primary"
              size="large"
              onClick={() => router.push('/booking/select')}
            >
              Back
            </Button>
          </Grid>

          <Grid item>
            <Button
            color="primary"
            size="large"
            variant="contained"
            onClick={() => router.push('/bookings')}
          >
            Continue
          </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default SelectFlight;
