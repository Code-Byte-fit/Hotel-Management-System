import React from "react";
import Common from "../components/Common/Common"
import CurrentDate from "../components/ReservationTab/CurrentDate"
import StatCard from "../components/ReservationTab/StatCard"
import ReservationTable from "../components/ReservationTab/ReservationsTable/ReservationTable"
import style from "../components/ReservationTab/ReservationTab.module.css"
function ReservationTab() {
    return (<>
        <Common />
        <span className={style.container}>
            <CurrentDate />
            <div className={style.statCardContainer}>
                <StatCard label="ARRIVALS" count="9" color="#06AC0C"/>
                <StatCard label="DEPARTURES" count="14" color="#FF0000"/>
                <StatCard label="STAY-OVERS" count="2" color="#0634AC"/>
                <StatCard label="ROOMS-BOOKED" count="3" color="#06ACAC"/>
            </div>
            <ReservationTable/>
        </span>

    </>)
        ;
}

export default ReservationTab;
