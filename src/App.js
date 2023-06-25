import './App.css';
import NavBar from "./components/Navbar/Navbar"
import ButtonsNav from './components/ButtonsNav/ButtonsNav';
import MenuAndIcon from './components/Menu&Icon/MenuAndIcon';
import SearchBar from './components/SearchBar/SearchBar';
import ButtonAside from './components/ButtonAside/ButtonAside';
import icon from "./components/ButtonAside/icons/liked.svg"
import biblioteca from "./components/ButtonAside/icons/biblioteca.svg"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ButtonAside text="Biblioteca" url={biblioteca}/>
    </div> 
  );
}

export default App;
