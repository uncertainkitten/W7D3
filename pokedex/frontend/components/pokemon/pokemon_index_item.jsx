import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => {
  return (
    <li>
      <Link to={`/pokemon/${poke.id}`}>
        <img src={poke.image_url} width="50"></img>
        <br/>
        {poke.name}
      </Link>
    </li>
  );
};

export default PokemonIndexItem
