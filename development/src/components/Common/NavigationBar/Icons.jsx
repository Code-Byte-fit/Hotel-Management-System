import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./NavigationBar.module.css"

function Icons(props){
    return (
       <Link to={props.to} >
            <li className={`${style.navList} ${props.active}`}><img src={props.name}/></li>
       </Link> 
    );
}

export default Icons;