import React from 'react'
import Notification from './Notification/Notification'
import Avatar from './Avatar/Avatar'
import style from "./HeaderRight.module.css"

export default function HeaderRight() {
  return (
    <>
        <div className={style.headerRight}>
            <Notification/>
            <Avatar name="Shamly Shanawaz" role="Receptionist"/>
        </div>
    </>
  )
}

