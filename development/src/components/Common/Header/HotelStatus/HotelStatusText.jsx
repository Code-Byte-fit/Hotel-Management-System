import React from "react";
import style from "./HotelStatus.module.css"
function HotelStatusText(props){
    return(
        <>
        <span className={style.text}>
            <span className={style.statusWord}>Status :</span>
            <span className={style.status}>{props.status}</span>
        </span>
            
        </>
    )
}

export default HotelStatusText;