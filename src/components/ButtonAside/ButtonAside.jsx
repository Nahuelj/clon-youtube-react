import React from 'react'
import styles from "./ButtonAside.module.css"

const ButtonAside = ({url, text}) => {
  return (
    <button className={styles.containerButtonAside} >
        <img className={styles.iconButtonAside} src={url} alt="icono" />
        <h3 className={styles.textButton}>
            {text}
        </h3>
    </button>
  )
}

export default ButtonAside