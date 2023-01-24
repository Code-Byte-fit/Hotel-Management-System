import React from 'react'
import userIcon from "../../../../../Images/DP2.png"
import style from "./avatar.module.css"

export default function Avatar(props) {
  return (
    <>
        <img src={userIcon} className={style.userIcon}/>
        <div className={style.userDetails}>
          <span className={style.userName}>{props.name}</span>
          <small className={style.userRole}>{props.role}</small>
        </div>
    </>
  )
}
