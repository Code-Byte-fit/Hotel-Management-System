import React from "react";
import ReservationsTableHeader from "./ReservationTableHeader";
import style from "../ReservationTab.module.css"
function ReservationTable(){
    return (<>
    <div className={style.reservationTableContainer}>
        <ReservationsTableHeader/>
        <table className={style.reservationTab}>
        <thead>
            <tr>
                <th>RESERVATION-ID</th>
                <th>GUEST</th>
                <th>DATE BOOKED</th>
                <th>ROOM(S)</th>
                <th>CHECK-IN</th>
                <th>CHECK-OUT</th>
                <th>BASE-RATE</th>
                <th>STATUS</th>
                <th>SOURCE</th>
                <th>MADE-BY</th>
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
    </>);
}

export default ReservationTable;