import React from 'react'
import styles from "./ButtonScrollCategories.module.css"



const ButtonScrollCategories = ({src}) => {
  return (
    <button className={styles.buttonScroll}>
        <img src={src} alt="" />
    </button>
  )
}

export default ButtonScrollCategories