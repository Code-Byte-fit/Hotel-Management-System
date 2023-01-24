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
   const add=props.addClass;
   function f(){
    return style.add;
   }
    return(
        <>
            <button onClick={props.onClick} className={`${style.defaultButton} ${curve()}  ${props.selected && style.selected} ${props.clicked && style.clicked}`}>{props.text}</button>
        </>
    );
}

export default Button;