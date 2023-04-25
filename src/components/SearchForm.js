import * as React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { LocalAirport } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Calendar from "@mui/icons-material/Event";
import dayjs from "dayjs";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { get_iata } from "@/api/auth";
import { useEffect, useState } from "react";

import Card from "@mui/material/Card";

import { format, isValid } from "date-fns";

function SearchForm(props) {
  useEffect(() => {
    get_iata()
      .then((res) => {
        setIataData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [iataData, setIataData] = useState([]);

  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);

  const sd = new Date();
  const ed = new Date();
  const endDate = ed.setDate(ed.getDate() + 5);

  const [value, setValue] = React.useState([dayjs(sd), dayjs(endDate)]);

  const handleDateRangePicker = (dd) => {
    console.log("start date", dayjs(dd[0].$d).format("DD/MM/YYYY"));
    console.log("end date", dayjs(dd[1].$d).format("DD/MM/YYYY"));
  };

  const handleButtonClick = async () => {
    // const response = await fetch("/api/my-endpoint", {
    //   method: "POST",
    //   body: JSON.stringify({ from: fromValue, to: toValue }),
    // });
    // const data = await response.json();
    // console.log("POST Request: " + data);
    console.log("From: " + JSON.stringify(fromValue.IATA_CODE));
    console.log("To: " + JSON.stringify(toValue.IATA_CODE));

    const selectedDateRange = value.map((date) =>
      dayjs(date.$d).format("DD/MM/YYYY")
    );
    console.log("Selected date range:", selectedDateRange);
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

  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
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
                  value={value}
                  onChange={(newValue) => handleDateRangePicker(newValue)}
                  slotProps={{
                    textField: { InputProps: { endAdornment: <Calendar /> } },
                  }}
                  renderInput={(startProps, endProps) => (
                    <>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </>
                  )}
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
