import React from "react";
import Header from "./Header/Header";
import NavigationBar from "./NavigationBar/Navigationbar"
import SearchBar from "./SearchBar/SearchBar"
function Common(){
    return(
        <>
            <NavigationBar/>
            <SearchBar/>
            <Header/>
        </>
    )
}

export default Common;