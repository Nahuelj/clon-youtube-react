import React from 'react'
import styles from "./NavBar.module.css"
import MenuAndIcon from '../Menu&Icon/MenuAndIcon'
import SearchBar from '../SearchBar/SearchBar'
import ButtonsNav from '../ButtonsNav/ButtonsNav'

function Navbar() {
  return (
    <div className={styles.containerNav}>
      <MenuAndIcon />
      <SearchBar />
      <ButtonsNav />
    </div>
  )
}

export default Navbar