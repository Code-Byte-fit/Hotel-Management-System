import React, { useState } from 'react'
import Select from 'react-select'
import style from "./Filter.module.css"

export default function FilterInput(props) {
      const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
        <div className={style.filterInputContainer}>
            <label>{props.label}</label>
            <input type={props.type} className={style.filterInput} style={{display:`${props.type==="select" && "none"}`}}/>
            <Select defaultValue={selectedOption} onChange={setSelectedOption} options={props.options} 
            className={`${style.select} ${props.type!="select" && style.unselect} `}
            />
        </div>
    </>
  )
}
