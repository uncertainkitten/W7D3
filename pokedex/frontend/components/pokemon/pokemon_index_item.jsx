import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({ poke }) => {
  return (
    <li>
      <Link to="/pokemon/:pokemonId">
        <img src={poke.image_url} width="50"></img>
        <br/>
        {poke.name}
      </Link>
    </li>
  );
};
