import React, { useState } from "react";
import logo from "../../../Images/logo white.png";
import Icons from "./Icons";
import Uppericons from "./UpperIcons";
import Lowericons from "./LowerIcons";
import style from "./NavigationBar.module.css"

function NavigationBar() {
    const [isNavExpanded,setNavExpanded]=useState(false);
    return (
        <span className={style.navContainer}>
            <nav className={`${style.navbar} ${isNavExpanded && style.navbarExpanded}`}
        onClick={() =>{setNavExpanded(!isNavExpanded);}} >
            <ul className={style.navListContainer}>
                <Icons to="#" name={logo}/>
                <Uppericons/>
                <Lowericons/>
            </ul>
        </nav>
        </span>
        
    )
}

export default NavigationBar;