import React,{useState} from "react";
import filterIcon from "../../../../Images/filter.png"
import Button from "../../../Common/Button/Button";
import style from "./Filter.module.css";
function Filter(){
    const [filter,setFilter]=useState(false);
    const toggleFilter=()=>{setFilter(!filter);}

    return (
        <>
            <img src={filterIcon} className={style.buttonIcon} onClick={toggleFilter}/>
            {filter && 
                <div className={style.popup}>
                <div className={style.overlay}><div className={style.content}>
                    <h1>hello</h1>
                    <p>lorem50</p>
                    <Button text="X" onClick={toggleFilter}/>
                </div></div>
                
            </div>
            }
           
        </>
    )
}

export default Filter;