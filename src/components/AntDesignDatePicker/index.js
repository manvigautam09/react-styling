import React, { useState } from "react";
import { DatePicker, version } from "antd";
import "antd/dist/antd.css";

const AntDesignDatePicker = () => {
  const [selectedDate, updateSelectdeDate] = useState("yyyy-mm-dd");

  const handleChange = date => {
    if (date) {
      updateSelectdeDate(date.format("YYYY-MM-DD"));
    } else {
      updateSelectdeDate("yyyy-mm-dd");
    }
  };

  return (
    <div>
      <h5>antd version: {version}</h5>
      <DatePicker onChange={handleChange} />
      <p className="margin-para">The date selected is {selectedDate}</p>
    </div>
  );
};
export default AntDesignDatePicker;
