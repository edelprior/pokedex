// ------------------------------------------------- //
// Evan MacHale - N00150552
// 12.01.19
// React + Material
// ------------------------------------------------- //
// https://github.com/material-components/material-components-web-react#step-3a-use-compiled-css
// https://sass-lang.com/guide
// ------------------------------------------------- //

import React, { Component } from 'react';
import axios from 'axios';
// Material Design Components
import {Cell, Grid, Row} from '@material/react-layout-grid';
import {Headline1} from '@material/react-typography';

// ------------------------------------------------- //

// My Components
import PokémonList from './components/pokémon/PokémonList'

import './App.scss';

// ------------------------------------------------- //

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokémon:{},
      moves:{},
      abilities:{}
    }
  }

  componentDidMount() {
    {/*

      We only really want to work with:
      1. List of Pokémon
      2. Pokémon moves
      3. Pokémon abilities

      At the following API addresses:
      1. https://pokeapi.co/api/v2/pokemon/
      2. https://pokeapi.co/api/v2/move/
      3. https://pokeapi.co/api/v2/ability/

    */}
    axios.get('https://pokeapi.co/api/v2/')
    .then(response => {
      this.setState({
        pokémon: response.data.pokemon,
        moves: response.data.move,
        abilities: response.data.ability
      });
      // console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <main className="app">
        <Grid>
          <PokémonList/>
        </Grid>
      </main>
    );
  }
}

// ------------------------------------------------- //

export default App;

// ------------------------------------------------- //
