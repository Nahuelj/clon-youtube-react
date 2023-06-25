import React from "react";
import styles from "../ButtonsNav/ButtonsNav.module.css";
import video from "../Navbar/icons/video.svg";
import notification from "../Navbar/icons/notification.svg";
import user from "../Navbar/icons/user.png";

const ButtonsNav = () => {
  return (
    <div className={styles.containerButtons}>
      <button className={`${styles.buttonVideo} ${styles.buttonNav}`}>
        <img className={styles.imgIcon} src={video} alt="" />
      </button>
      <button className={`${styles.buttonNotifications} ${styles.buttonNav}`}>
        <img className={styles.imgIcon} src={notification} alt="" />
        <span className={styles.notify}>9+</span>
      </button>
      <button className={`${styles.buttonProfile} ${styles.buttonNav}`}>
        <img className={styles.imgIconProfile} src={user} alt="" />
      </button>
    </div>
  );
};

export default ButtonsNav;
