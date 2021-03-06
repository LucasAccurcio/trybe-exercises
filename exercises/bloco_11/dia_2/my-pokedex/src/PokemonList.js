import React from 'react';
import PropTypes from 'prop-types';

class PokemonList extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
    <div className="pokemon">
      <div>
      <p>{ name }</p>
      <p>{ type }</p>
      <p>{`Peso: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      </div>
      <img src={ image } alt={`Imagem pokemon ${name}`} />
    </div>
    );
  }
}

PokemonList.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default PokemonList;