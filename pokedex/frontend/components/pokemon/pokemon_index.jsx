import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }



  render () {
    if (this.props.pokemon.length === 0) {
      return 'Loading. . .';
    }
    this.pokemonItems = this.props.pokemon.map(poke => {
      return (<PokemonIndexItem key={poke.id} poke={poke} />);
    });
    return (
      <ul>
         {this.pokemonItems}
      </ul>
    );
  }
}

export default PokemonIndex;
