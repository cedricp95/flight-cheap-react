import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function FixedSizeGrid(props) {
  const columns = [
    { field: "booking_token", headerName: "ID", width: 70 },
    { field: "cityFrom", headerName: "cityFrom", width: 170 },
    { field: "cityTo", headerName: "cityTo", width: 170 },
    { field: "airlines_name", headerName: "Airlines name", width: 170 },
    { field: "utc_arrival", headerName: "Arrival", width: 250 },
    { field: "utc_departure", headerName: "Departure", width: 250 },
    {
      field: "conversion",
      headerName: "Fare",
      width: 250,
      valueGetter: (params) => params.row.conversion.PHP,
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
        utc_arrival: dataRow2.utc_arrival,
        utc_departure: dataRow2.utc_departure,
        conversion: dataRow2.conversion,
      });
    }
  }
  return (
    <div style={{ width: "80%", margin: "50px auto", background: "white" }}>
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid
          getRowId={(row) =>
            row.booking_token + "" + row.utc_arrival + "" + new Date().getTime()
          }
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
