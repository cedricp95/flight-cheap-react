import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";

export default function FixedSizeGrid(props) {
  const columns = [
    { field: "booking_token", headerName: "ID", width: 70 },
    { field: "cityFrom", headerName: "From", width: 170 },
    { field: "cityTo", headerName: "To", width: 170 },
    { field: "airlines_name", headerName: "Airlines", width: 170 },

    {
      field: "utc_departure",
      headerName: "Departure",
      width: 250,
      valueGetter: (params) => {
        const utcDate = new Date(params.row.utc_departure);
        const localDate = new Date(
          utcDate.toLocaleString("en-US", { timeZone: "Asia/Manila" })
        );
        const formattedDate = localDate.toLocaleString("en-US", {
          timeZone: "Asia/Manila",
          dateStyle: "medium",
          timeStyle: "medium",
        });
        return formattedDate;
      },
    },
    {
      field: "utc_arrival",
      headerName: "Arrival",
      width: 250,
      valueGetter: (params) => {
        const utcDate = new Date(params.row.utc_arrival);
        const localDate = new Date(
          utcDate.toLocaleString("en-US", { timeZone: "Asia/Manila" })
        );
        const formattedDate = localDate.toLocaleString("en-US", {
          timeZone: "Asia/Manila",
          dateStyle: "medium",
          timeStyle: "medium",
        });
        return formattedDate;
      },
    },
    {
      field: "conversion",
      headerName: "Fare",
      width: 250,
      valueGetter: (params) => params.row.conversion.PHP.toLocaleString(),
    },
  ];
  const rows = [];
  for (var i in props.dataFlightSearch) {
    const dataRow = props.dataFlightSearch[i];
    for (var i1 in dataRow) {
      const dataRow2 = dataRow[i1];
      rows.push({
        booking_token: dataRow2.booking_token,
        cityFrom: dataRow2.cityFrom,
        cityTo: dataRow2.cityTo,
        airlines_name: dataRow2.airlines_name,
        utc_departure: dataRow2.utc_departure,
        utc_arrival: dataRow2.utc_arrival,
        conversion: dataRow2.conversion,
      });
    }
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          margin: "20px 0",
          padding: "10px",
          bgcolor: "rgba(128, 128, 128, 0.5)",
        }}
      >
        <Typography variant="h3">Search Results</Typography>
      </Box>
      <div
        style={{
          width: "80%",
          margin: "50px auto",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            className="centered"
            getRowId={(row) =>
              row.booking_token +
              "" +
              row.utc_arrival +
              "" +
              new Date().getTime()
            }
            columns={columns}
            rows={rows}
            pageSize={5}
            rowsPerPageOptions={[5]}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      </div>
    </>
  );
}
