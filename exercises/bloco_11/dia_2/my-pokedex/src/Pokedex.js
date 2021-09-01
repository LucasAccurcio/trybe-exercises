import React from 'react';
import PokemonList from './PokemonList';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
    <div className="pokedex">
      {pokemons.map((pokemon) => <PokemonList key={pokemon.id} pokemon={pokemon} />)}
    </div>
    )
  }
}

export default Pokedex;