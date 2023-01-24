import React from "react";
import Header from "./Header/Header";
import style from "./common.module.css"
function Common(props){
    return(
        <>
            <Header/>
            <div className={style.content}>
                {props.children}
            </div>
        </>
    )
}

export default Common;