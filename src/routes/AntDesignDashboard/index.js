import React,{ useState } from "react";
import { DatePicker ,version} from 'antd';
import 'antd/dist/antd.css'; 
import  "../style.css";

const AntDesignDashboard = () => {
   
    const [selectedDate,updateSelectdeDate] =useState("dd/mm/yy")
    const handleChange =date =>{
        if(date){
            updateSelectdeDate(date.format('YYYY-MM-DD'));
        }
        else{
            updateSelectdeDate(date);
        }
    }
  return (
    <div className="container"> 
      <h1>antd version: {version}</h1>
      <div >
      <DatePicker onChange={handleChange} />
      <p>The date selected is {selectedDate}</p>
      </div>
    </div>
  );
};
export default AntDesignDashboard;
