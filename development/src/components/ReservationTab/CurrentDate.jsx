import React from "react";
import dateImg from "../../Images/resCalender.png"
import style from "./ReservationTab.module.css"
function CurrentDate(){
    const date=new Date();
    function suffix(date) {
        if (date > 3 && date < 21) return 'th';
        switch (date % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      }
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const CurrentDate=`${date.getDate()}${suffix(date)} ${month[date.getMonth()]},${date.getFullYear()}`
    return(
        <>
            <span className={style.dateContainer}>
                <img src={dateImg}/>
                <span className={style.currentDate}>{CurrentDate}</span>
            </span>
            
        </>
    )
}

export default CurrentDate;