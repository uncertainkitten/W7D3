import { connect } from 'react-redux';
import { requestAPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectPokemonItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: selectPokemonItems(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAPokemon: (pokemonId) => dispatch(requestAPokemon(pokemonId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
