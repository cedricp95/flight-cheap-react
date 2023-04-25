import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { LocalAirport } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Calendar from "@mui/icons-material/Event";

import { get_iata,get_search_flights,get_airline_code } from "@/api/auth";
import dayjs from "dayjs";

function SearchForm(props) {
  const [iataData, setIataData] = useState([]);
  const [airlineData, setAirlineData] = useState({});
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);

  const [selectedDates, setSelectedDates] = useState(null);
  useEffect(() => {
    get_iata()
      .then((res) => {
        setIataData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    get_airline_code()
      .then((res) => {
        const data = {}
        for (const i in res.data){
          const res_data = res.data[i];
          data[res_data.code] = res_data.name
        }
        setAirlineData(data);
      })
      .catch((error) => {
        console.error(error);
      });  
  }, []);

  

  const handleDateRangePicker = (dd) => {
    setSelectedDates(dd);
  };

  const handleButtonClick = async () => {

    console.log("From: " + JSON.stringify(fromValue.IATA_CODE));
    console.log("To: " + JSON.stringify(toValue.IATA_CODE));
    props.setDataFlightSearch([])
    if (selectedDates) {
      const startDate = dayjs(selectedDates[0]).format("DD/MM/YYYY");
      const endDate = dayjs(selectedDates[1]).format("DD/MM/YYYY");
      console.log("Selected start date:", startDate);
      console.log("Selected end date:", endDate);
      get_search_flights([{
        "from_city_code": fromValue.IATA_CODE,
        "to_city_code": toValue.IATA_CODE,
        "from_time": startDate,
        "to_time": endDate
      }]).then(async (res,req)=>{
        
        const row_data = await res.data.map(res_data=>{
          
          return res_data.route.map(res_data1=>{
           
            return {
              "baglimit":res_data.baglimit,
              "booking_token":res_data.booking_token,
              "deep_link":res_data.deep_link,
              "price":res_data.price,
              "quality":res_data.quality,
              "airlines_code":res_data1['airlines'],
              "airlines_name":airlineData[res_data1['airlines']],
              "cityFrom":res_data1['cityFrom'],
              "cityTo":res_data1['cityTo'],
              "conversion":res_data1['conversion'],
              "fare":res_data1['fare'],
              "facilitated_booking_available":res_data1['facilitated_booking_available'],
              "utc_arrival":res_data1['utc_arrival'],
              "utc_departure":res_data1['utc_departure'],
            };
          })
          
        })
        props.setDataFlightSearch(row_data)
      }).catch((e)=>{
        
      })
    }

  };

  const topPlaces = [
    { label: "Boracay", id: 0 },
    { label: "Singapore", id: 1 },
    { label: "Cebu", id: 2 },
  ];

  const cabinClass = [
    { label: "Economy", id: "M" },
    { label: "Economy Premium", id: "W" },
    { label: "Business", id: "C" },
    { label: "First Class", id: "F" },
  ];

  const [trip, setTrip] = React.useState("");

  const handleChange = (event) => {
    setTrip(event.target.value);
  };

  return (
    <Card sx={{ maxWidth: "80%", margin: "50px auto" }}>
      <Box component="section" sx={{ display: "flex", overflow: "hidden" }}>
        <Container
          sx={{
            mb: 5,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2} sx={{ marginTop: 3, mb: 4 }}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <LocalAirport />
              <Typography variant="h5" marked="center" component="h5">
                Flight
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <div>
                <FormControl
                  variant="filled"
                  sx={{ m: 1, minWidth: 80, borderBottom: "none" }}
                  margin="normal"
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Trip
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={trip}
                    onChange={handleChange}
                    autoWidth
                    label="Trip"
                  >
                    <MenuItem value={10}>Round-trip</MenuItem>
                    <MenuItem value={21}>One Way</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Autocomplete
                options={iataData}
                getOptionLabel={(option) => option.CITY}
                onChange={(event, newValue) => {
                  setFromValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField sx={{ width: 1 }} {...params} label="From" />
                )}
              />
            </Grid>

            <Grid item xs={3}>
              <Autocomplete
                options={iataData}
                getOptionLabel={(option) => option.CITY}
                onChange={(event, newValue) => {
                  setToValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField sx={{ width: 1 }} {...params} label="To" />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                sx={{ paddingTop: 0 }}
              >
                <DateRangePicker
                  localeText={{ start: "Check-in", end: "Check-out" }}
                  slotProps={{
                    textField: { InputProps: { endAdornment: <Calendar /> } },
                  }}
                  onChange={(newValue) => handleDateRangePicker(newValue)}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <Grid container spacing={0} sx={{ marginTop: 3 }}>
            <Grid item xs={3}>
              <TextField
                id="filled-number"
                label="Adults"
                type="number"
                sx={{ width: 1 }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                sx={{ width: 1 }}
                id="filled-number"
                label="Children"
                type="number"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                sx={{ width: 1 }}
                id="filled-number"
                label="Infant"
                type="number"
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cabinClass}
                renderInput={(params) => (
                  <TextField {...params} label="Cabin Class" />
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={handleButtonClick}>
              Search
            </Button>
          </Grid>
        </Container>
      </Box>
    </Card>
  );
}

export default SearchForm;
