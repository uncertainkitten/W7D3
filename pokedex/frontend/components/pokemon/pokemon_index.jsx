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
      this.props.pokemon.map((poke) => {
        <li>
          {poke.name}
          <img src={poke.image_url} width="100" height="100"></img>
        </li>
      });
    </ul>
    );
  }
}

export default PokemonIndex;
