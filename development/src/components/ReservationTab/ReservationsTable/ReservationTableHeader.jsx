import React ,{ useState }from "react";
import addIcon from "../../../Images/add.png"
import editIcon from "../../../Images/edit.png"
import Filter from "./Filter/Filter";
import Button from "../../Common/Button/Button";
import style from "../ReservationTab.module.css"
function ReservationsTableHeader(){
    const [selected, setSelected] = useState({
        today:true,
        tommorow:false
    });
    
   
    return (
        <>
        <div className={style.reservationsTableHeader}>
            <label className={style.tableHeading}>RESERVATIONS</label>
            <img src={addIcon} className={style.buttonIcon}/>
            <img src={editIcon} className={style.buttonIcon}/>
            <div className={style.rightContainer}>
                <Filter/>
                <span className={style.day}>
                    <Button text="today"  curve="left" clicked={selected.today} selected={selected.today} onClick={()=>{setSelected({today:true,tommorow:false})}}/>
                    <Button text="tommorow" curve="right" clicked={selected.tommorow} selected={selected.tommorow} onClick={()=>{setSelected({today:false,tommorow:true})}}/>
                </span>
                
            </div>
            
        </div>
            
        </>
    )
}

export default ReservationsTableHeader;