import React from "react";
import styles from "./NavCategories.module.css";
import ButtonCategories from "../ButtonCategories/ButtonCategories";
import scrollLeft from "../ButtonAside/icons/scrollLeft.svg"
import scrollRight from "../ButtonAside/icons/scrollRight.svg"





const NavCategories = () => {
  return (
    <div className={styles.containerCategories}>
      <button className={styles.buttonScroll}>
        <img src={scrollLeft} alt="" />
      </button>
      <div className={styles.containerNavCategories}>
        <ButtonCategories />
        <ButtonCategories />
        <ButtonCategories />
        <ButtonCategories />
        <ButtonCategories />
        <ButtonCategories />
        <ButtonCategories />
        <ButtonCategories />
      </div>
      <button className={styles.buttonScroll}>
        <img src={scrollRight} alt="" />
      </button>
    </div>
  );
};

export default NavCategories;
