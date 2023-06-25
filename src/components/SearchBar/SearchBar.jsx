import React from "react";
import styles from "./SearchBar.module.css";
import search from "../Navbar/icons/search.png";
import microphone from "../Navbar/icons/microphone.svg"

const SearchBar = () => {
  return (
    <div className={styles.containerSearch}>
      <div className={styles.containerSearchBar}>
        <input placeholder="Buscar" className={styles.inputBar} type="text" />
        <button className={styles.buttonSearch}>
          <img className={styles.imgSearch} src={search} alt="zoom" />
        </button>
      </div>
      <button className={styles.buttonMicrophone}>
        <img className={styles.imgMicrophone} src={microphone} alt="microphone" />
      </button>
    </div>
  );
};

export default SearchBar;
