import React from 'react'
import notificationIcon from "../../../../../Images/notification.png"
import Popup from 'reactjs-popup'
import style from "./Notification.module.css"

export default function Notification() {
  return (
    <>
    <Popup trigger={<img src={notificationIcon} className={style.notificationIcon}/>}>
        {/* <img src={notificationIcon} className={style.notificationIcon}/> */}
    </Popup>
  </>
  )
}
