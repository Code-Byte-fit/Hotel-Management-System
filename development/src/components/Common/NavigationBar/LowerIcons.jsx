import React from "react";
import Icons from "./Icons"
import help from "../../../Images/help.png"
import settings from "../../../Images/settings.png"
import logout from "../../../Images/logout.png"
import style from "./NavigationBar.module.css"
function Lowericons(){
    return (<div className={style.lowericons}>
        <Icons to="#" name={help}/>
        <Icons to="#" name={settings}/>
        <Icons to="#" name={logout}/>
    </div>)
}

export default Lowericons;