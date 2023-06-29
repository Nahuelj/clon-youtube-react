import React from 'react'
import styles from "./ContainerVideo.module.css"
import point from "./img/icons8-punto-en-círculo-48.png"

const ContainerVideo = ({video, perfil, vistas, tiempo, titulo, canal, videoDuration}) => {
  return (
    <div className={styles.containerVideo}>
        <div className={styles.containerMiniatura} >
            <img className={styles.miniatura} src={video} alt="video" />
            <span className={styles.duration}>{videoDuration}</span>
        </div>
        <div className={styles.containerDescription}>
            <div className={styles.containerProfile}>
                <img className={styles.imgProfile} src={perfil} alt="perfil" />
            </div>
            <div className={styles.data}>
                <p className={styles.title}>{titulo}</p>
                <p className={styles.chanel}>{canal}</p>
                <div className={styles.containerViews}>
                    <p className={styles.views}>{vistas}</p>
                    <img className={styles.point} src={point} alt="" />
                    <p className={styles.time}>{tiempo}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContainerVideo