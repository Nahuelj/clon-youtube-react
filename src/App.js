import styles from "./App.module.css"
import NavBar from "./components/Navbar/Navbar"
import AsideBar from './components/AsideBar/AsideBar';
import ButtonCategories from './components/ButtonCategories/ButtonCategories';

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <div className={styles.containerAll}>
      <AsideBar/>
      <ButtonCategories/>
      </div>
    </div> 
  );
}

export default App;
