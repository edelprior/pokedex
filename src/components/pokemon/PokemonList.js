// ------------------------------------------------- //
// Evan MacHale - N00150552
// 12.01.19
// List of Pokemon
// ------------------------------------------------- //

import React, { Component } from 'react';
import axios from 'axios';
// Material Design Components
import { Cell, Grid, Row } from '@material/react-layout-grid';

// ------------------------------------------------- //

// My components
import PokemonCard from './PokemonCard';

// ------------------------------------------------- //

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex:[],
      pokemon:[]
    }
  }

  componentDidMount() {
    const pokemon_list = [];
    axios.get('https://pokeapi.co/api/v2/pokedex/1/')
    .then(response => {
      {/*
        Use the response to create a ref list to pokemon Id's
        https://pokeapi.co/api/v2/pokedex/1/ holds a specific list of pokemon
        Each pokemon we want to use is stored at a seperate address
        So we pass pokedex 'entry_number' to the pokemon URL
        `https://pokeapi.co/api/v2/pokemon/${index.entry_number}/`

        Why not just use `https://pokeapi.co/api/v2/pokemon/` to get all ???
        That URL is the same as https://pokeapi.co/api/v2/pokedex/1/
        It only holds Id's and not the pokemon details we want to List

        The difference is that 'pokedex' holds a specific number (no duplicates)
        but 'pokemon' holds every single version and alternative appearences of pokemons
      */}
      {/* Add all Id's to state */}
      this.setState(state => ({pokedex: state.pokedex = response.data.pokemon_entries}));
      {/* Map through pokedex and request each pokemon */}
      this.state.pokedex.forEach(index => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index.entry_number}/`)
        .then(response => pokemon_list.push(response.data));
      })
      {/* Add all pokemon to state */}
      this.setState(state => ({pokemon: state.pokemon = pokemon_list}));
    })
    .catch(error => console.log(error));

  }

  render() {
    // console.log(this.state.pokemon);
    // console.log(this.state.pokemon.name);
    // console.log(this.state.pokedex);
    const pokemon = this.state.pokemon.map(p =>
      <PokemonCard
        key={p.id}
        name={p.name}
        image={p.sprites.front_default}
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
