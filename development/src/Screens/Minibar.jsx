import React from "react";
import Common from "../components/Common/Common"
import style from '../components/Minibar/Minibar.module.css'
import DisplayFormData from "../components/Minibar/DisplayFormData";
import Topbutton from "../components/Minibar/Topbutton";


function Minibar(){
   return(<>
         <Topbutton/>
        <Common>
        
        <DisplayFormData/>
        </Common>
   </>) 
}

export default Minibar;