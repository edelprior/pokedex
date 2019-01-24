// ------------------------------------------------- //
// Evan MacHale - N00150552
// 12.01.19
// List of Pokemon
// ------------------------------------------------- //

import React, { Component } from 'react';
import axios from 'axios';

// ------------------------------------------------- //

// My components
import PokemonCard from './PokemonCard';

// ------------------------------------------------- //

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
  }

  /*
    https://pokeapi.co/api/v2/pokedex/1/ holds a specific list of pokemon
    Each pokemon we want to use is stored at a seperate address
    So we pass response 'entry_number' to the pokemon URL
    `https://pokeapi.co/api/v2/pokemon/${pokedex.entry_number}/`

    Why not just use `https://pokeapi.co/api/v2/pokemon/` to get all ???
    That URL is the same as https://pokeapi.co/api/v2/pokedex/1/
    It only holds Id's and not the pokemon details we want to List

    The difference is that 'pokedex' holds a specific number (no duplicates)
    but 'pokemon' holds every single version and alternative appearences of all pokemon
  */

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokedex/1/')
    .then(response => {
      // Map through each entry and request each pokemon by entry
      response.data.pokemon_entries.forEach(pokedex => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokedex.entry_number}/`)
        .then(response => {
          /*
            I was mutating Data -> use .concat instead of .push
            https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
            https://stackoverflow.com/questions/41052598/reactjs-array-push-function-not-working-in-setstate/41052635
          */
          this.setState(prevState => { return {pokemon: prevState.pokemon.concat(response.data)} });
        })
      })
    })
    .catch(error => console.log(error));
  }

  render() {
    const pokemon = this.state.pokemon.map(p =>
      <PokemonCard
        key={p.id}
        name={p.name}
        sprite={p.sprites.front_default}
        types={p.types}
      />
    );
    return (
      <section>{pokemon}</section>
    );
  }
}

// ------------------------------------------------- //

export default PokemonList;

// ------------------------------------------------- //
