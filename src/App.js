import styles from "./App.module.css";
import NavBar from "./components/Navbar/Navbar";
import AsideBar from "./components/AsideBar/AsideBar";
import ButtonCategories from "./components/ButtonCategories/ButtonCategories";
import NavCategories from "./components/NavCategories/NavCategories";
import ButtonScrollCategories from "./components/ButtonScrollCategories/ButtonScrollCategories";
import ContainerVideo from "./components/ContainerVideo/ContainerVideo";
import fotoPerfil from "./components/ContainerVideo/img/foto-perfil.jpg"
import miniatura from "./components/ContainerVideo/img/miniatura.webp"

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.containerAll}>
        <AsideBar />
        <div>
          <NavCategories />
          <ContainerVideo 
            canal="The wild proyect"        
            titulo="The Wild Project #224 | Alarma de 3a Guerra Mundial"
            perfil={fotoPerfil}
            video={miniatura}
            vistas="123k"
            tiempo="hace 0 dias"
            videoDuration="12:43"
             />
        </div>
      </div>
    </div>
  );
}

export default App;
