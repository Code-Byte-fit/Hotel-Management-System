import React, { useState } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import EditOnlyRow from "./EditOnlyRow";
import style from "../Rooms/Rooms.module.css"
import EditDeleteJpg from "./EditDeleteJpg";
import sort from "../../Images/sort.png"

function Table({ rooms, setRooms }) {

    //edit
    const [editFormData, setEditFormData] = useState({
        roomNumber: '',
        roomType: '',
        baseCharge: '',
        floor: '',
        sqFeet: ''
    })
    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);

    }
    
    const [editRoomId, setEditRoomId] = useState(null);

    const handleEditClick = (event, room) => {
        event.preventDefault();
        setEditRoomId(room.id);

        const formValues = {
            roomNumber: room.roomNumber,
            roomType: room.roomType,
            baseCharge: room.baseCharge,
            floor: room.floor,
            sqFeet: room.sqFeet
        }

        setEditFormData(formValues);
    };
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedRoom = {
            id : editRoomId,
            roomNumber: editFormData.roomNumber,
            roomType: editFormData.roomType,
            baseCharge: editFormData.baseCharge,
            floor: editFormData.floor,
            sqFeet: editFormData.sqFeet
        }
        const newRooms = [...rooms];
    
        const index = rooms.findIndex((room) =>room.id === editRoomId)
    
        newRooms[index] = editedRoom;
    
         setRooms(newRooms)
        setEditRoomId(null);
    }


    return (
        <span className={style.tableContainer}>
            <label className={style.labelTwo}>Edit/Delete Room</label>
            <span> <EditDeleteJpg /></span>
            <span className={style.filter}>
                <select name="Room Number" className={style.selectTwo} >

                    <option value="Room Number" disabled selected hidden>Room Number</option>
                    <option value="001">001</option>
                    <option value="002">002</option>
                    <option value="003">003</option>
                    <option value="004">004</option>
                </select>
            </span>
            <div className={style.tbl}>
            <span className={style.div3}>
                <form >
                    <table className={style.tableOne}>
                        <thead>
                            <tr>
                                <th>

                                    <input type="checkbox" className={style.checkOne} />

                                </th>
                                <th>Room Number <img src={sort} className={style.sort1}/></th>
                                <th>Room Type<img src={sort} className={style.sort1}/></th>
                                <th>Base Charge<img src={sort} className={style.sort1}/></th>
                                <th>Floor<img src={sort} className={style.sort1}/></th>
                                <th>Sq.Feet<img src={sort} className={style.sort1}/></th>
                                <th>Actions<img src={sort} className={style.sort1}/></th>


                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room) => (

                                <React.Fragment>
                                {editRoomId ===room.id ? (
                                     <EditOnlyRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}
                                     handleEditFormSubmit={handleEditFormSubmit} />
                                     ):(
                                        <ReadOnlyRow room={room} handleEditClick={handleEditClick}/>
                             ) }
                                   
                                   
                                </React.Fragment>
                            ))}

                        </tbody>
                    </table>
                </form>
            </span>
            </div>
        </span>
        
    )
}

export default Table;