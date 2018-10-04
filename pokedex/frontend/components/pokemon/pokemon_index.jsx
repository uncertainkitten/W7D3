import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    return (
      <ul>
        <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
         {this.props.pokemon.map(poke => {
           return (<PokemonIndexItem key={poke.id} poke={poke} />);
         })}
      </ul>
    );
  }
}

export default PokemonIndex;
