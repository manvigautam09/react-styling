import React, { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const ReactStrapDatePicker = () => {
  const [selectedDate, updateSelectdeDate] = useState("yyyy-mm-dd");

  const handleTextInputChange = event => {
    updateSelectdeDate(event.target.value);
  };
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Date Picker</InputGroupText>
        </InputGroupAddon>
        <Input type="date" onChange={handleTextInputChange} />
      </InputGroup>
      <p className="margin-para">The date selected is {selectedDate}</p>
    </div>
  );
};
export default ReactStrapDatePicker;
