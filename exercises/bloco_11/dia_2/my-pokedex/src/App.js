import pokemons from "./data";
import Pokedex from "./Pokedex";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pokedéx</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
