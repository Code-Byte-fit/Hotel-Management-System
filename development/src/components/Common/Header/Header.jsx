import React from "react";
import HotelStatus from "./HotelStatus/HotelStatus";
import NotificationButton from "./NotificationButton/NotificationButton";
import UserCard from "./UserCard/UserCard";
import style from "./Header.module.css"
function Header(){
    return(
        <>
        <div className={style.header}>
            <HotelStatus/>
            <UserCard name="Shamly Shanawaz" position="Receptionist"/>
            <NotificationButton/>
        </div>
        </>
    )
}

export default Header;