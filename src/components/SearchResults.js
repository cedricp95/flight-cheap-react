import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

export default function FixedSizeGrid() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    maxColumns: 6,
  });

  return (
    <div style={{ width: "80%", margin: "50px auto", background: "white" }}>
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid {...data} />
      </div>
    </div>
  );
}
