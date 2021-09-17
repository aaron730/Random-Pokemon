import React, { Fragment, useState, useEffect } from 'react';

const PokemonDisplay = (props) => {
  const [sprite, setSprite] = useState('');

  useEffect(() => {
    if (props.isShiny === 1) setSprite(props.pokemon.sprites.front_shiny);
    else setSprite(props.pokemon.sprites.front_default);
  }, [props.pokemon]);

  return (
    <Fragment>
      {props.pokemonRevealed ? (
        <div>
          <img src={sprite} />
          <p>{props.pokemon.name}</p>
        </div>
      ) : (
        <div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg'
            style={{ height: '100px' }}
            onClick={() => {
              props.setpokemonRevealed(true);
            }}
          ></img>
        </div>
      )}
    </Fragment>
  );
};

export default PokemonDisplay;
