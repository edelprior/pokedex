// ------------------------------------------------- //
// Evan MacHale - N00150552
// 12.01.19
// List of Pokemon
// ------------------------------------------------- //

import React, { Component } from 'react';
import axios from 'axios';
// Material Design Components
import {Cell, Grid, Row} from '@material/react-layout-grid';

// ------------------------------------------------- //

// My components
import PokemonCard from './PokemonCard';

// ------------------------------------------------- //

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonReference:[]
    }
  }

  componentDidMount() {
    {/*
      This URL gets a list of Pokemon references
      1. Name
      2. URL
      The URL points to the Pokemon's profile
      We will pass this URL as a prop to each Pokemon Card
    */}
    axios.get('https://pokeapi.co/api/v2/pokedex/1/')
    .then(response => {
      this.setState({pokemonReference:response.data.pokemon_entries});
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const pokemon_list = this.state.pokemonReference.map(p =>
      <PokemonCard
        key={p.entry_number}
        name={p.pokemon_species.name}
        url={'https://pokeapi.co/api/v2/pokemon/' + p.entry_number + '/'}
      />
    );
    return (
      <section>{pokemon_list}</section>
    );
  }
}

// ------------------------------------------------- //

export default PokemonList;

// ------------------------------------------------- //
