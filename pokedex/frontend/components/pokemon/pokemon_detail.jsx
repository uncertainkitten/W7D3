import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  // componentWillReceiveProps(newProps) {
  //   this.props.requestAPokemon(newProps.match.params.pokemonId);
  // }

  render () {
    debugger
    return (
      <div className="test">

        <img src={this.props.pokemon.image_url}></img>
        <h3>{this.props.pokemon.name}</h3>
        <p>Type: {this.props.pokemon.poke_type}</p>
        <p>Attack: {this.props.pokemon.attack}</p>
        <p>Defense: {this.props.pokemon.defense}</p>

        <ul>{this.props.items.map(item => <li>{item.name}</li>)}</ul>
      </div>
    );
  }
}

export default PokemonDetail;
