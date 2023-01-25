import React from "react";
import Common from "../components/Common/Common"
import Form from "../components/Rooms/Form"
import Table from "../components/Rooms/Table";
import DisplayFormData from "../components/Rooms/DisplayFormData";
import style from '../components/Rooms/Rooms.module.css'

function Rooms(){
   return(<>
        <Common>
      <DisplayFormData />
         
        </Common>
   </>) 
}

export default Rooms;