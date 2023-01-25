import React from "react";
import CreateBtn from "./CreateBtn";
import style from "../Rooms/Rooms.module.css";


function Form({ handleAddFormChange }) {
    return (
        <span className={style.formContainer}>
            <label className={style.labelOne}>Add Room</label>
            <span className={style.div1}>
                <input
                    type="text"
                    className={style.inputOne}
                    placeholder="Room Number"
                    name="roomNumber"
                    required="required"
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    className={style.inputOne}
                    placeholder="Room Type"
                    name="roomType"
                    required="required"
                    onChange={handleAddFormChange}
                />


                <select name="baseCharge" className={style.selectOne} required="required" onChange={handleAddFormChange}>

                    <option value="Base Charge" disabled selected hidden>Base Charge</option>
                    <option value="r1">1000</option>
                    <option value="r2">2000</option>
                    <option value="r3">3000</option>
                    <option value="r4">5000</option>
                </select>

                <select name="floor" className={style.selectOne} required="required" onChange={handleAddFormChange}>

                    <option value="Floor" disabled selected hidden>Floor</option>
                    <option value="F1">1st Floor</option>
                    <option value="F2">2nd Floor</option>
                    <option value="F3">3rd Floor</option>
                    <option value="F4">4th Floor</option>
                </select>
                <select className={style.selectOne} name="sqFeet" required="required" onChange={handleAddFormChange}>

                    <option value="" disabled selected hidden>Square Feet</option>
                    <option value="sq1">250</option>
                    <option value="sq2">300</option>
                    <option value="sq3">500</option>
                    <option value="sq4">450</option>
                </select>

            </span>
            <span className={style.div2}>
                <textarea className={style.textArea1} rows="4" cols="50" placeholder="Additional Information"></textarea>


            </span>
        </span>
    )
}

export default Form;