import React from "react";
import { useSelector } from "react-redux";
import style from "./NavigationBar.module.css"

function Icons(props){
    return (
        <li className={`${style.navList} ${props.active}`}><a href={props.to}><img src={props.name}/></a></li>
    );
}

export default Icons;