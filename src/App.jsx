import "./App.css";
import ListPersona from "./components/Persona";
import { Fruta } from "./components/frutas";
import ProjectsPage2 from "./projects/ProjectsPage2";
import Profile from "./components/Avatar";
import Button1 from "./components/Button";
import Toolbar from "./components/Toolbar"
import Signup from "./components/Signup";
import Pepe from "./components/Pepe";
import Counter from "./components/Estado";

//let frutas = ["piña", "manzana"];

function App() {
  return (
    //<ListPersona/>
    //<ProjectsPage2/>
    //<Fruta fru={frutas}/>
    //<Profile/>
    //<Button1/>
    
  /*   <Toolbar
    onPlayMovie={() => alert('la pelicula se va a reproducir')}
    onUploadImage={() => alert('la imagen se va a cargar!')}
  /> */
  /* <div className="container">
  <Signup/>
  </div>  */
  <Counter/>
  );
}

export default App;


