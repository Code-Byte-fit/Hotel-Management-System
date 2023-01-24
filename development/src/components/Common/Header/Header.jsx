import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import HeaderRight from './HeaderRight/HeaderRight'
import style from "./Header.module.css"

export default function Header() {
  return (
    <>
    <div className={style.header}>
       <div className={style.headerTop}>
          <SearchBar/>
          <HeaderRight/>
        </div>
        <hr className={style.line}/>
    </div>
        
    </>
  )
}


