import React from "react";
import Icons from "./Icons"
import dashboardicon from "../../../Images/dashboard.png"
import calender from "../../../Images/calender.png"
import clipboard from "../../../Images/clipboard.png"
import style from "./NavigationBar.module.css"
function Uppericons(){
    return (<div className={style.uppericons}>
    <Icons to="#" name={dashboardicon} active={style.active}/>
    <Icons to="#" name={calender}/>
    <Icons to="#" name={clipboard}/>
    <Icons to="#" name={calender}/>
</div>)
}

export default Uppericons;