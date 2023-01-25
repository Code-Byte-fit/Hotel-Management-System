import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import filterIcon from "../../../../Images/filter.png"
import FilterInput from './FilterInput';
import Button from "../../../Common/Button/Button"
import style from "./Filter.module.css"

const contentStyle = { background: '#ffff',width:'43vw',position:'relative',bottom:'5vh',left:'2vw' };
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' }; 

export default () => (
  <Popup trigger={<img src={filterIcon} className={style.buttonIcon}/>} 
  {...{  contentStyle, overlayStyle, arrowStyle }} modal>
    <div>
          <label className={style.filterHeading}>Filter</label>
          <div>
            <div>
              <FilterInput label="date booked" type="date"/>
              <FilterInput label="check-in date" type="date"/>
              <FilterInput label="check-out date" type="date"/>
              <FilterInput label="room-type" type="select"/>
            </div>
            <div>
            <FilterInput label="status" type="select"/>
            <FilterInput label="source" type="select"/>
            <FilterInput label="made-by" type="select"/>
            </div>
            <div className={style.apply}>
                <Button text="apply"/>
            </div>
           
          </div>
    </div>
  </Popup>
);