import React from "react";
import ReservationsTableHeader from "./ReservationTableHeader";
import Button from "../../Common/Button/Button";
import sortIcon from "../../../Images/sort black.png"
import style from "../ReservationTab.module.css"
function ReservationTable(){
    return (<>
    <div className={style.reservationTableContainer}>
        <ReservationsTableHeader/>
        <div className={style.tableContainer}>
        <table className={style.reservationTab}>
        <thead>
            <tr>
                <th>RESERVATION-ID<img src={sortIcon} className={style.sortIcon}/></th>
                <th>GUEST<img src={sortIcon} className={style.sortIcon}/></th>
                <th>DATE BOOKED<img src={sortIcon} className={style.sortIcon}/></th>
                <th>ROOM(S)<img src={sortIcon} className={style.sortIcon}/></th>
                <th>CHECK-IN<img src={sortIcon} className={style.sortIcon}/></th>
                <th>CHECK-OUT<img src={sortIcon} className={style.sortIcon}/></th>
                <th>BASE-RATE<img src={sortIcon} className={style.sortIcon}/></th>
                <th>STATUS<img src={sortIcon} className={style.sortIcon}/></th>
                <th>SOURCE<img src={sortIcon} className={style.sortIcon}/></th>
                <th>MADE-BY<img src={sortIcon} className={style.sortIcon}/></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>Shamly</td>
                <td>23/02/2020</td>
                <td>QR(2/5)(H),KR(3/11)(H)</td>
                <td>26/12/2022</td>
                <td>28/12/2022</td>
                <td>$70</td>
                <td>CONFIRMED</td>
                <td>WALK-IN</td>
                <td>SHAMLY</td>
            </tr>
        </tbody>
        </table>
        </div>
        <span className={style.viewMore}><Button text="View More"/></span>
    </div>
    </>);
}

export default ReservationTable;