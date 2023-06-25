import React from 'react'
import styles from "./ButtonCategories.module.css"

const ButtonCategories = ({text="Categoria"}) => {
  return (
    <div className={styles.containerButtonCategories}>
        <h4 className={styles.textCategories}>{text}</h4>
    </div>
  )
}

export default ButtonCategories