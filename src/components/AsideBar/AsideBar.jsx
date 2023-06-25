import React from 'react'
import styles from "./AsideBar.module.css"
import ButtonAside from "../ButtonAside/ButtonAside"
import Hr from "../Hr/Hr"
import home from "../ButtonAside/icons/home.svg"
import shorts from "../ButtonAside/icons/shorts.svg"
import suscript from "../ButtonAside/icons/suscriptions.svg"
import 
library from "../ButtonAside/icons/biblioteca.svg"
import 
history from "../ButtonAside/icons/historial.svg"
import 
videos from "../ButtonAside/icons/tus-videos.svg"
import 
masTarde from "../ButtonAside/icons/ver-mas-tarde.svg"
import 
liked from "../ButtonAside/icons/liked.svg"
import 
mostrar from "../ButtonAside/icons/mostrar-mas.svg"
import 
fire from "../ButtonAside/icons/tendencias.svg"
import 
music from "../ButtonAside/icons/music.svg"
import 
movies from "../ButtonAside/icons/movies.svg"
import 
live from "../ButtonAside/icons/live.svg"
import 
games from "../ButtonAside/icons/games.svg"
import 
news from "../ButtonAside/icons/news.svg"
import 
sports from "../ButtonAside/icons/sports.svg"
import 
learn from "../ButtonAside/icons/learn.svg"
import 
premium from "../ButtonAside/icons/premium.svg"
import 
studio from "../ButtonAside/icons/studio.svg"
import 
ymusic from "../ButtonAside/icons/ymusic.svg"
import 
kids from "../ButtonAside/icons/kids.svg"
import 
config from "../ButtonAside/icons/config.svg"
import 
denuncias from "../ButtonAside/icons/denuncias.svg"
import 
help from "../ButtonAside/icons/help.svg"
import 
comments from "../ButtonAside/icons/comments.svg"















const AsideBar = () => {
  return (
    <div className={styles.containerAside}>
        <ButtonAside text="Principal" url={home}/>
        <ButtonAside text="Shorts" url={shorts}/>
        <ButtonAside text="Suscripciones" url={suscript}/>
        <Hr/>
        <ButtonAside text="Biblioteca" url={library}/>
        <ButtonAside text="Historial" url={history}/>
        <ButtonAside text="Tus videos" url={videos}/>
        <ButtonAside text="Ver más tarde" url={masTarde}/>
        <ButtonAside text="Videos que me gus..." url={liked}/>
        <ButtonAside text="Mostrar más" url={mostrar}/>
        <Hr/>
        <h3 className={styles.textAside}>Suscripciones</h3>
        <ButtonAside text="Mostrar más" url={mostrar}/>
        <ButtonAside text="Mostrar más" url={mostrar}/>
        <ButtonAside text="Mostrar más" url={mostrar}/>
        <ButtonAside text="Mostrar más" url={mostrar}/>
        <ButtonAside text="Mostrar más" url={mostrar}/>
        <ButtonAside text="Mostrar más" url={mostrar}/>
        <ButtonAside text="Mostrar más" url={mostrar}/>
        <ButtonAside text="Mostrar más" url={mostrar}/>
        <Hr/>
        <h3 className={styles.textAside}>Explorar</h3>
        <ButtonAside text="Tendencias" url={fire}/>
        <ButtonAside text="Música" url={music}/>
        <ButtonAside text="Películas" url={movies}/>
        <ButtonAside text="En vivo" url={live}/>
        <ButtonAside text="Videojuegos" url={games}/>
        <ButtonAside text="Noticias" url={news}/>
        <ButtonAside text="Deportes" url={sports}/>
        <ButtonAside text="Aprendizaje" url={learn}/>
        <Hr/>
        <h3 className={styles.textAside}>Más de Youtube</h3>
        <ButtonAside text="Youtube Premium" url={premium}/>
        <ButtonAside text="Youtube Studio" url={studio}/>
        <ButtonAside text="Youtube Music" url={ymusic}/>
        <ButtonAside text="Youtube Kids" url={kids}/>
        <Hr/>
        <ButtonAside text="Configuración" url={config}/>
        <ButtonAside text="Historial de denunc.." url={denuncias}/>
        <ButtonAside text="Ayuda" url={help}/>
        <ButtonAside text="Enviar comentarios" url={comments}/>
        <Hr/>
        <p className={`${styles.politics} ${styles.parrafo1}`}>Acerca de Prensa Derechos de autor Comunicarte con nosotros Creadores Anunciar Desarrolladores</p>
        <p className={`${styles.politics} ${styles.parrafo2}`}>Condiciones Privacidad Políticas y seguridad Cómo funciona YouTube Prueba funciones nuevas</p>
        <p className={styles.copy}>© 2023 Google LLC</p>
    </div>
  )
}

export default AsideBar