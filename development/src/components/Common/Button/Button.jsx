import React from "react";
import style from "./Button.module.css"
function Button(props){
    function curve(){
        if (props.curve==="left"){
            return style.leftCurved;
        }
        else if(props.curve==="right"){
            return style.rightCurved;
        }
    }
    return(
        <>
            <button className={`${style.defaultButton} ${curve()} ${props.selected && style.selected}`}>{props.text}</button>
        </>
    );
}

export default Button;