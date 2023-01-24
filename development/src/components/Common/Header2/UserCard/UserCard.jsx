import React from "react";
import Avatar from "./Avatar";
import style from "./UserCard.module.css"

function UserCard(props){
    return (
        <>
            <button className={style.button}>
            <Avatar/>
            <div className={style.text}>
            <label className={style.username}>{props.name}</label>
            <label className={style.role}>{props.position}</label>
            </div>
            </button>
        </>
    )
}

export default UserCard;