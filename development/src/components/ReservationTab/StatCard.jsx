import React from "react";
import style from "./ReservationTab.module.css"
function StatCard(props){
   return <button className={style.statCard}>
      <label className={style.statLabel}>{props.label}</label>
      <label className={style.statCount} style={{color:props.color}}>{props.count}</label>
   </button>;
}

export default StatCard;