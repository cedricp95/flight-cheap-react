import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangePickerComponent = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleLogDates = () => {
    console.log(
      dateRange.map(({ startDate, endDate }) => ({
        startDate: startDate.toLocaleDateString("en-GB"),
        endDate: endDate.toLocaleDateString("en-GB"),
      }))
    );
  };

  return (
    <div>
      <DateRangePicker
        ranges={dateRange}
        onChange={(ranges) => setDateRange([ranges.selection])}
      />
      <button onClick={handleLogDates}>Log Dates</button>
    </div>
  );
};

export default DateRangePickerComponent;
