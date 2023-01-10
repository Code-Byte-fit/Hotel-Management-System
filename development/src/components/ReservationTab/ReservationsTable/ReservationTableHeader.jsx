import React from "react";
import addIcon from "../../../Images/add.png"
import editIcon from "../../../Images/edit.png"
import filterIcon from "../../../Images/filter.png"
import Button from "../../Common/Button/Button";
import style from "../ReservationTab.module.css"
function ReservationsTableHeader(){
    return (
        <>
        <div className={style.reservationsTableHeader}>
            <label className={style.tableHeading}>RESERVATIONS</label>
            <img src={addIcon} className={style.buttonIcon}/>
            <img src={editIcon} className={style.buttonIcon}/>
            <div className={style.rightContainer}>
                <img src={filterIcon} className={style.buttonIcon}/>
                <span className={style.day}>
                    <Button text="today" curve="left" selected="true"/>
                    <Button text="tommorow" curve="right"/>
                </span>
                
            </div>
            
        </div>
            
        </>
    )
}

export default ReservationsTableHeader;