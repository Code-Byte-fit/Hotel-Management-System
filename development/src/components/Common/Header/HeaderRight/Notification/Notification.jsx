import React from 'react'
import notificationIcon from "../../../../../Images/notification.png"
import style from "./notification.module.css"

export default function Notification() {
  return (
    <>
        <img src={notificationIcon} className={style.notificationIcon}/>
    </>
  )
}
