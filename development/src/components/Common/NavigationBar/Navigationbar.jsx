import React, { useState } from "react";
import logo from "../../../Images/logo white.png";
import Icons from "./Icons";
import Uppericons from "./UpperIcons";
import Lowericons from "./LowerIcons";
import style from "./NavigationBar.module.css"

function NavigationBar() {
    const [isNavExpanded,setNavExpanded]=useState(false);
    return (
        <nav 
        className={!isNavExpanded?style.navbar:style.navbarExpanded}
        onClick={() =>{setNavExpanded(!isNavExpanded);}} >
            <ul>
                <Icons to="#" name={logo}/>
                <Uppericons/>
                <Lowericons/>
            </ul>
        </nav>
    )
}

export default NavigationBar;