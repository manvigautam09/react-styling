import React,{useState} from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
const ReactStrapDashboard = () => {

        const [selectedDate,updateSelectdeDate] =useState("yyyy-mm-dd")
        const handleChange = event =>{
                updateSelectdeDate(event.target.value);
        }

  return (
    <div className="container">
      <div className="react-strap-container">
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Date Picker</InputGroupText>
        </InputGroupAddon>
        <Input type="date" onChange={handleChange}/>
      </InputGroup>
      </div>
      <p>The date selected is {selectedDate}</p>
     </div> 
  );
};
export default ReactStrapDashboard;
