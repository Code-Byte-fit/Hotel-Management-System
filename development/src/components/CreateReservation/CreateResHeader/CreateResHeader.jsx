import React from 'react'
import Steps from './Steps'
import style from "./CreateResHeader.module.css"

export default function CreateResHeader() {
  return (
    <div className={style.CreateResHeader}>
        <span className={style.heading}>NEW RESERVATION</span> 
        <div className={style.stepsContainer}>
          <Steps step="1" text="AVAILABILITY" completed="true"/>
          <Steps step="2" text="DETAILS" completed="true"/>
          <Steps step="3" text="CONFIRM"/>
        </div>
    </div>
       

  )
}
