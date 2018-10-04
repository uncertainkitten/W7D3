import React from 'react';

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
        { this.props.pokemon.map(poke =>
          <li key={poke.id}>
            <img src={poke.image_url} width="50" height="50"></img>
            <br/>
            {poke.name}
          </li>)}
      </ul>
    );
  }
}

export default PokemonIndex;
