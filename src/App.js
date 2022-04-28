import logo from "./logo.svg";
import "./App.css";
import Character from "../src/pages/Character";
import CharactersList from "../src/pages/CharactersList";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
     <CharactersList/>
     <Character id={4}/>
     <Search/>
    </div>
  );
}

export default App;
