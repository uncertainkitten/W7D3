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
    return (
      <div className="test">
        <ul>
          <img src={this.props.pokemon.image_url}></img>
          <h3>{this.props.pokemon.name}</h3>
          <li>{this.props.pokemon.type}</li>
        </ul>
        <ul>{this.props.items.map(item => <li>{item.name}</li>)}</ul>
      </div>
    );
  }
}

export default PokemonDetail;
