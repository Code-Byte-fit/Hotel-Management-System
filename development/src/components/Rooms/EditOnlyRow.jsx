import React from "react";
import style from "../Rooms/Rooms.module.css"
import saveJpg from "../../Images/save3.png"

const EditOnlyRow = ({editFormData,handleEditFormChange, handleEditFormSubmit}) => {
    return(
        <tr>
        <td></td>
            <td><input
                        type="text"
                        className= {style.editOne}
                        placeholder="Room Number"
                        name="roomNumber"
                        required="required"
                        value={editFormData.roomNumber}
                   onChange={handleEditFormChange}
                    />
                    </td>
            <td>
            <input
                            type="text"
                            className= {style.editOne}
                            placeholder="Room Type"
                            name="roomType"
                            required="required"
                            value={editFormData.roomType}
                            onChange={handleEditFormChange}
                        />
            </td>
            <td>
           
            <select name="baseCharge" className= {style.editTwo}  required="required" value={editFormData.baseCharge} onChange={handleEditFormChange} >
                          
                          <option value="Base Charge" disabled selected hidden>Base Charge</option>
                          <option value="r1">r1</option>
                          <option value="r2">r2</option>
                          <option value="r3">r3</option>
                          <option value="r4">r4</option>
                      </select>
            </td>
            <td>
            <select name="floor" className= {style.editTwo}  required="required" value={editFormData.floor} onChange={handleEditFormChange}>
                          
                          <option value="Floor" disabled selected hidden>Floor</option>
                          <option value="F1">1st Floor</option>
                          <option value="F2">2nd Floor</option>
                          <option value="F3">3rd Floor</option>
                          <option value="F4">4th Floor</option>
                      </select>
            </td>
            <td>
            <select className= {style.editTwo}  name="sqFeet"  required="required" value={editFormData.sqFeet} onChange={handleEditFormChange}>
                           
                           <option value="" disabled selected hidden>Square Feet</option>
                           <option value="sq1">sq1</option>
                           <option value="sq2">sq2</option>
                           <option value="sq3">sq3</option>
                           <option value="sq4">sq4</option>
                       </select>
            </td>
            <td>
             <button type="button" className={style.saveBtn} onClick={handleEditFormSubmit}><img src={saveJpg}/></button> 
                {/* <button type="submit" className="button-3" onClick={handleCancelClick}>cancel</button> */}
            </td>
        </tr>
    )
}

export default EditOnlyRow;

// onClick={(event) => handleEditClick(event,room)}