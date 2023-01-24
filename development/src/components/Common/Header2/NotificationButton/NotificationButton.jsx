import React, { useState } from "react";
import notificationGreen from "../../../../Images/notificationGreen.png";
import notificationWhite from "../../../../Images/notificationWhite.png";
import style from "./NotificationButton.module.css"

function NotificationButton() {
    const [isClicked, setClicked] = useState(false);
    return (
        <>
            <button  onClick={() => { setClicked(!isClicked)}} 
            className={`${style.button} ${isClicked && style.clickedNotification}`}>
                <img src={!isClicked?notificationGreen:notificationWhite} />
            </button>
        </>
    );
}

export default NotificationButton;