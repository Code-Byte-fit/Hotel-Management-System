import React from "react";
import HotelStatusText from "./HotelStatusText";
import HotelStatusImg from "./HotelStatusImg";
function HotelStatus(props){
    return (
        <>
            <HotelStatusImg/>
            <HotelStatusText status="Open"/>
        </>
    )
}

export default HotelStatus;