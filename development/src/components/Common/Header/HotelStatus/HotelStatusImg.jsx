import React from "react";
import statusImg from "../../../../Images/status.png"
import statusColor from "../../../../Images/statusColor.png"
import style from "./HotelStatus.module.css"
function HotelStatusImg(props){
    return (
        <>
            <img src={statusImg} className={style.statusImg}/>
            <img src={statusColor} className={style.statusCircle}/>
        </>
    )
}

export default HotelStatusImg;