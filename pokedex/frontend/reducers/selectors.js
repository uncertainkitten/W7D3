import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  const pokemon = values(state.entities.pokemon);
  return pokemon;
};

export const selectPokemonItems = (state) => {
  const items = values(state.entities.items);
  return items;
};
