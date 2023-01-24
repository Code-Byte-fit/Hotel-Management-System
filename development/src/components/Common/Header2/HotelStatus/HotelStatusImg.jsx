import React from "react";
import statusImg from "../../../../Images/status.png"
import statusColor from "../../../../Images/statusColor.png"
import style from "./HotelStatus.module.css"
function HotelStatusImg(props){
    return (
        <>
        <span className={style.img}>
        <img src={statusImg} className={style.statusImg}/>
        <img src={statusColor} className={style.statusCircle}/>
        </span>
            
        </>
    )
}

export default HotelStatusImg;