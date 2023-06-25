import React from "react";
import styles from "./MenuAndIcon.module.css";
import menu from "../Navbar/icons/menu.svg"
import logo from "../Navbar/icons/logo.svg"

function MenuAndIcon() {
  return (
    <div className={styles.containerMenu}>
      <button className={styles.menu}>
        <img className={styles.imgMenu} src={menu} alt="" />
      </button>
      <a className={styles.logo} href="*">
        <img className={styles.imgLogo} src={logo} alt="" />
        <p className={styles.ar}>AR</p>
      </a>
    </div>
  );
}

export default MenuAndIcon;
