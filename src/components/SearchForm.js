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
  TextField,
  Autocomplete,
  Typography,
} from "@mui/material";

import { DateRangePicker } from "react-date-range";
import { LocalAirport } from "@mui/icons-material";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { get_iata, get_search_flights, get_airline_code } from "@/api/auth";

function SearchForm(props) {
  const [iataData, setIataData] = useState([]);
  const [airlineData, setAirlineData] = useState({});
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);

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
        const data = {};
        for (const i in res.data) {
          const res_data = res.data[i];
          data[res_data.code] = res_data.name;
        }
        setAirlineData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleButtonClick = async () => {
    if (!fromValue || !fromValue.IATA_CODE) {
      // handle error when textbox is empty
      console.log("From textbox is empty");
      return;
    }
    if (!toValue || !toValue.IATA_CODE) {
      // handle error when textbox is empty
      console.log("To textbox is empty");
      return;
    }
    console.log("From: " + JSON.stringify(fromValue.IATA_CODE));
    console.log("To: " + JSON.stringify(toValue.IATA_CODE));
    props.setDataFlightSearch([]);

    if (dateRange) {
      const { startDate, endDate } = dateRange[0];
      console.log(
        `Selected date range: ${startDate.toLocaleDateString(
          "en-GB"
        )} - ${endDate.toLocaleDateString("en-GB")}`
      );
      get_search_flights([
        {
          from_city_code: fromValue.IATA_CODE,
          to_city_code: toValue.IATA_CODE,
          from_time: startDate.toLocaleDateString("en-GB"),
          to_time: endDate.toLocaleDateString("en-GB"),
        },
      ])
        .then(async (res, req) => {
          const row_data = await res.data.map((res_data) => {
            return res_data.route.map((res_data1) => {
              return {
                baglimit: res_data.baglimit,
                booking_token: res_data.booking_token,
                deep_link: res_data.deep_link,
                price: res_data.price,
                quality: res_data.quality,
                airlines_code: res_data1["airlines"],
                airlines_name: airlineData[res_data1["airlines"]],
                cityFrom: res_data1["cityFrom"],
                cityTo: res_data1["cityTo"],
                conversion: res_data1["conversion"],
                fare: res_data1["fare"],
                facilitated_booking_available:
                  res_data1["facilitated_booking_available"],
                utc_arrival: res_data1["utc_arrival"],
                utc_departure: res_data1["utc_departure"],
              };
            });
          });
          props.setDataFlightSearch(row_data);
        })
        .catch((e) => {});
    }
  };

  const handleLogDates = () => {
    console.log(
      dateRange.map(({ startDate, endDate }) => ({
        startDate: startDate.toLocaleDateString("en-GB"),
        endDate: endDate.toLocaleDateString("en-GB"),
      }))
    );
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
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <FormControl required defaultValue="One Way" fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Booking Options
                </InputLabel>
                <Select
                  value={trip}
                  onChange={handleChange}
                  autoWidth
                  label="Trip"
                >
                  <MenuItem value={21}>One Way</MenuItem>
                  <MenuItem value={10}>Round-trip</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              {/* <LocalAirport />
              <Typography variant="h5" marked="center" component="h5">
                Flight
              </Typography> */}
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              {/* First row */}

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
              <TextField
                id="filled-number"
                label="Adults"
                type="number"
                sx={{ width: 1, mt: 5 }}
              />
              <TextField
                id="filled-number"
                label="Children"
                type="number"
                sx={{ width: 1, mt: 5 }}
              />
            </Grid>

            <Grid item xs={3}>
              {/* Second row */}
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
              <TextField
                id="filled-number"
                label="Infant"
                type="number"
                sx={{ width: 1, mt: 5 }}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cabinClass}
                renderInput={(params) => (
                  <TextField {...params} label="Cabin Class" />
                )}
                sx={{ width: 1, mt: 5 }}
              />
            </Grid>

            <Grid item xs={6}>
              {/* Third row */}
              <DateRangePicker
                minDate={new Date()}
                ranges={dateRange}
                onChange={(ranges) => setDateRange([ranges.selection])}
              />
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{ mt: 4 }}
            >
              Search
            </Button>
          </Grid>
        </Container>
      </Box>
    </Card>
  );
}

export default SearchForm;
