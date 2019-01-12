// ------------------------------------------------- //
// Evan MacHale - N00150552
// 12.01.19
// List of Pokémon
// ------------------------------------------------- //

import React, { Component } from 'react';
import axios from 'axios';
// Material Design Components
import {Cell, Grid, Row} from '@material/react-layout-grid';

// ------------------------------------------------- //

// My components
import PokémonCard from './PokémonCard';

// ------------------------------------------------- //

class PokémonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokémonReference:[]
    }
  }

  componentDidMount() {
    {/*
      This URL gets a list of Pokémon references
      1. Name
      2. URL
      The URL points to the Pokémon's profile
      We will pass this URL as a prop to each Pokémon Card
    */}
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
      this.setState({pokémonReference:response.data.results});
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const pokémon_list = this.state.pokémonReference.map(p =>
      <PokémonCard
        key={p.name}
        name={p.name}
        url={p.url}
      />
    );
    return (
      <section>{pokémon_list}</section>
    );
  }
}

// ------------------------------------------------- //

export default PokémonList;

// ------------------------------------------------- //
