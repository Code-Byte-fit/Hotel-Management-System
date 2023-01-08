import React from "react";
import HotelStatus from "./HotelStatus/HotelStatus";
import NotificationButton from "./NotificationButton/NotificationButton";
import UserCard from "./UserCard/UserCard";
function Header(){
    return(
        <>
            <HotelStatus/>
            <UserCard name="Shamly Shanawaz" position="Receptionist"/>
            <NotificationButton/>
        </>
    )
}

export default Header;