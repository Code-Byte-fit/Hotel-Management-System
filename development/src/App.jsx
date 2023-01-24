import React from "react";
import { createBrowserRouter,createRoutesFromElements,Route,Link,RouterProvider,Outlet} from "react-router-dom";
import NavigationBar from "./components/Common/NavigationBar/Navigationbar";
import ReservationTab  from "./Screens/ReservationTab";

export default function App() {
    const router=createBrowserRouter(
        createRoutesFromElements( 
            <Route path="/" element={<Root/>}>
                <Route path="/reservationTab" element={<ReservationTab/>}/>
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



