import React from "react";
import style from "./NavigationBar.module.css"
function Icons(props){
    return (
        <li className={props.active}><a href={props.to}><img src={props.name}/></a></li>
        
    );
}

export default Icons;