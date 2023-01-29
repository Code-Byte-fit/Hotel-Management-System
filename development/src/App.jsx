import React from "react";
import { createBrowserRouter,createRoutesFromElements,Route,Link,RouterProvider,Outlet} from "react-router-dom";
import NavigationBar from "./components/Common/NavigationBar/Navigationbar";
import Header from "./components/Common/Header/Header";
import ReservationTab  from "./Screens/ReservationTab";
import Minibar from "./Screens/Minibar";
import Rooms from "./Screens/Rooms";
import ResPageOne from "./Screens/CreateReservation/ResPageOne";
import ResPageTwo from "./Screens/CreateReservation/ResPageTwo";
import Promotion from "./Screens/Promotion"

export default function App() {
    const router=createBrowserRouter(
        createRoutesFromElements( 
            <Route path="/" element={<Root/>}>
                <Route path="/reservationTab" element={<ReservationTab/>}/>
                <Route path="/miniBar" element={<Minibar/>}/>
                <Route path="/rooms" element={<Rooms/>}/>
                <Route path="/promotion" element={<Promotion/>}/>
                <Route path="/createResPg2" element={<ResPageTwo/>}/>
            </Route>
        )
    )
    
    
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}



const Root=()=>{
    return(
        <>
        <NavigationBar/>
          
        <div><Outlet/></div>
        </>
    )
}



