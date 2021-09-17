import './App.css';
import ex from './exPokemon';

import React, { useState, useEffect, useCallback } from 'react';
import PokemonDisplay from './pokemonDisplay';
import { Button, Form, FormCheck } from 'react-bootstrap';
import Konami, { useKonami } from 'react-konami-code';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const Pokedex = require('pokeapi-js-wrapper');
  const P = new Pokedex.Pokedex();
  const [pokemon, setPokemon] = useState(ex);
  const [pokemon1, setPokemon1] = useState(ex);
  const [pokemon2, setPokemon2] = useState(ex);
  const [pokemon3, setPokemon3] = useState(ex);
  const [pokemon4, setPokemon4] = useState(ex);
  const [pokemon5, setPokemon5] = useState(ex);
  const [isLoading, setIsLoading] = useState(false);
  const [maxID, setmaxID] = useState(898);
  const [includeLegendaries, setIncludeLegendaries] = useState(false);
  const [includeBeasts, setIncludeBeasts] = useState(false);
  const [pokemonRevealed, setpokemonRevealed] = useState(false);
  const [pokemon1Revealed, setpokemon1Revealed] = useState(false);
  const [pokemon2Revealed, setpokemon2Revealed] = useState(false);
  const [pokemon3Revealed, setpokemon3Revealed] = useState(false);
  const [pokemon4Revealed, setpokemon4Revealed] = useState(false);
  const [pokemon5Revealed, setpokemon5Revealed] = useState(false);

  function getisShiny(min, max) {
    return Math.random() * (max - min) + min;
  }

  const randomUnique = (range, count, includeLegendaries, includeBeasts) => {
    let nums = new Set();
    let beasts = [793, 794, 795, 796, 797, 798, 799, 803, 804, 805, 806];
    let legends = [
      144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380,
      381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488,
      489, 490, 491, 492, 493, 494, 638, 639, 640, 641, 642, 643, 645, 646, 647,
      648, 649, 716, 717, 718, 720, 785, 786, 787, 788, 789, 790, 791, 792, 800,
      801, 802, 807, 808, 809, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897,
      898,
    ];
    let filter = [];
    if (includeBeasts && includeLegendaries) {
      filter = legends.concat(beasts);
    } else if (includeBeasts && !includeLegendaries) {
      filter = beasts;
    } else if (!includeBeasts && includeLegendaries) {
      filter = legends;
    }
    while (nums.size < count) {
      let rand = Math.floor(Math.random() * (range - 1 + 1) + 1);
      if (includeLegendaries) {
        if (!filter.includes(rand)) {
          nums.add(rand);
        }
      } else {
        nums.add(rand);
      }
    }
    return [...nums];
  };

  const forBry = useCallback(async () => {
    console.log('hi bry');
    if (isLoading) return;
    setIsLoading(true);
    const response = await P.getPokemonByName(191);
    setpokemonRevealed(false);
    setPokemon(response);
    setIsLoading(true);
    const response1 = await P.getPokemonByName(191);
    setpokemon1Revealed(false);
    setPokemon1(response1);
    setIsLoading(true);
    const response2 = await P.getPokemonByName(191);
    setpokemon2Revealed(false);
    setPokemon2(response2);
    setIsLoading(true);
    const response3 = await P.getPokemonByName(191);
    setpokemon3Revealed(false);
    setPokemon3(response3);
    setIsLoading(true);
    const response4 = await P.getPokemonByName(191);
    setpokemon4Revealed(false);
    setPokemon4(response4);
    setIsLoading(true);
    const response5 = await P.getPokemonByName(191);
    setpokemon5Revealed(false);
    setPokemon5(response5);
    setIsLoading(false);
  }, [maxID]);

  const generateTeamhandler = useCallback(async () => {
    const randomIds = randomUnique(maxID, 6, includeLegendaries, includeBeasts);
    if (isLoading) return;
    setIsLoading(true);
    const response = await P.getPokemonByName(randomIds[0]);
    setpokemonRevealed(false);
    setPokemon(response);
    setIsLoading(true);
    const response1 = await P.getPokemonByName(randomIds[1]);
    setpokemon1Revealed(false);
    setPokemon1(response1);
    setIsLoading(true);
    const response2 = await P.getPokemonByName(randomIds[2]);
    setpokemon2Revealed(false);
    setPokemon2(response2);
    setIsLoading(true);
    const response3 = await P.getPokemonByName(randomIds[3]);
    setpokemon3Revealed(false);
    setPokemon3(response3);
    setIsLoading(true);
    const response4 = await P.getPokemonByName(randomIds[4]);
    setpokemon4Revealed(false);
    setPokemon4(response4);
    setIsLoading(true);
    const response5 = await P.getPokemonByName(randomIds[5]);
    setpokemon5Revealed(false);
    setPokemon5(response5);

    setIsLoading(false);
  }, [maxID, includeLegendaries]);

  let generatedTeam = <p>Error</p>;

  useKonami(forBry);

  if (pokemon !== {}) {
    generatedTeam = (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
        <PokemonDisplay
          pokemon={pokemon}
          pokemonRevealed={pokemonRevealed}
          setpokemonRevealed={setpokemonRevealed}
          isShiny={Math.floor(getisShiny(1, 8192))}
        ></PokemonDisplay>
        <PokemonDisplay
          pokemon={pokemon1}
          pokemonRevealed={pokemon1Revealed}
          setpokemonRevealed={setpokemon1Revealed}
          isShiny={Math.floor(getisShiny(1, 8192))}
        ></PokemonDisplay>
        <PokemonDisplay
          pokemon={pokemon2}
          pokemonRevealed={pokemon2Revealed}
          setpokemonRevealed={setpokemon2Revealed}
          isShiny={Math.floor(getisShiny(1, 8192))}
        ></PokemonDisplay>
        <PokemonDisplay
          pokemon={pokemon3}
          pokemonRevealed={pokemon3Revealed}
          setpokemonRevealed={setpokemon3Revealed}
          isShiny={Math.floor(getisShiny(1, 8192))}
        ></PokemonDisplay>
        <PokemonDisplay
          pokemon={pokemon4}
          pokemonRevealed={pokemon4Revealed}
          setpokemonRevealed={setpokemon4Revealed}
          isShiny={Math.floor(getisShiny(1, 8192))}
        ></PokemonDisplay>
        <PokemonDisplay
          pokemon={pokemon5}
          pokemonRevealed={pokemon5Revealed}
          setpokemonRevealed={setpokemon5Revealed}
          isShiny={Math.floor(getisShiny(1, 8192))}
        ></PokemonDisplay>
      </div>
    );
  }

  return (
    <div className='App'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '2em',
        }}
      >
        <Button
          variant='danger'
          onClick={() => {
            generateTeamhandler();
          }}
          disabled={isLoading}
        >
          Generate Team
        </Button>
        <Form.Select
          style={{ width: '250px' }}
          value={maxID}
          onChange={(event) => {
            setmaxID(parseInt(event.target.value));
          }}
        >
          <option value={898} label={'All'}></option>
          <option value={151} label={'Pokemon through Gen 1'}></option>
          <option value={251} label={'Pokemon through Gen 2'}></option>
          <option value={386} label={'Pokemon through Gen 3'}></option>
          <option value={493} label={'Pokemon through Gen 4'}></option>
          <option value={649} label={'Pokemon through Gen 5'}></option>
          <option value={721} label={'Pokemon through Gen 6'}></option>
          <option value={809} label={'Pokemon through Gen 7'}></option>
        </Form.Select>
        <Form.Check
          style={{ paddingLeft: '50px' }}
          label={'Remove legendaries?'}
          value={includeLegendaries}
          defaultChecked={false}
          onChange={(event) => {
            setIncludeLegendaries(event.target.checked);
          }}
        />
        <Form.Check
          style={{ paddingLeft: '50px' }}
          label={'Remove Ultrabeasts?'}
          value={includeLegendaries}
          defaultChecked={false}
          onChange={(event) => {
            setIncludeBeasts(event.target.checked);
          }}
        />
      </div>
      {generatedTeam}
    </div>
  );
}

export default App;
