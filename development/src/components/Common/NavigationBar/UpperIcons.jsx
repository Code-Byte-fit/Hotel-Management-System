import React from "react";
import Icons from "./Icons"
import dashboardicon from "../../../Images/dashboard.png"
import calender from "../../../Images/calender.png"
import style from "./NavigationBar.module.css"
function Uppericons(props){
    return (<div className={style.uppericons}>
    <Icons to="/reservationTab" name={dashboardicon}/>
    <Icons to="#" name={calender}/>
    {props.children}
</div>)
}

export default Uppericons;