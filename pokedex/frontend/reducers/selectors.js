export const selectAllPokemon = (state) => {
  const pokemon = Object.values(state.entities.pokemon);
  return pokemon;
};
