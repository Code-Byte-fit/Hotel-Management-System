import React from "react";
import proPic from "../../../../Images/DP2.png"
import style from "./UserCard.module.css"
function Avatar(props){
 return (
        <span className={style.avatarContainer}>
            <img src={proPic} className={style.avatar}/>
        </span>
 )
}

export default Avatar;