import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));
const MaterialUiDatePicker = () => {
  const classes = useStyles();
  const [selectedDate, updateSelectdeDate] = useState("yyyy-mm-dd");
  const [selectedPickerDate, handleDateChange] = useState(new Date());

  const handleTextInputChange = event => {
    updateSelectdeDate(event.target.value);
  };

  return (
    <div className="material-contain">
      <h4>MaterialUI DatePickers</h4>
      <TextField
        id="date"
        label="DatePicker"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={handleTextInputChange}
      />
      <p className="margin-para">The date selected is {selectedDate}</p>
      <h4>@material-ui/pickers</h4>
      <div className="material-picker-container">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={selectedPickerDate} onChange={handleDateChange} />
          <TimePicker value={selectedPickerDate} onChange={handleDateChange} />
          <DateTimePicker
            value={selectedPickerDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      </div>
      <p className="margin-para">
        The selected picker date is {selectedPickerDate.toString()}
      </p>
    </div>
  );
};
export default MaterialUiDatePicker;
