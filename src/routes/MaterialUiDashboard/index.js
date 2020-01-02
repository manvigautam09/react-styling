import React,{useState} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const MaterialUiDashboard = () => {
        const classes = useStyles();
        const [selectedDate,updateSelectdeDate] =useState("yyyy-mm-dd")
        const handleChange = event =>{
                updateSelectdeDate(event.target.value);
        }
  return (
    <div className="container"> 
     <TextField
        id="date"
        label="Materail ui datepicker"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
       <p>The date selected is {selectedDate}</p>
    </div>
  );
};
export default MaterialUiDashboard;
