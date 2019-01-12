// ------------------------------------------------- //
// Evan MacHale - N00150552
// 12.01.19
// Pokémon Card
// ------------------------------------------------- //

import React, { Component } from 'react';
import axios from 'axios';
// Material Design Components
import {Cell, Grid, Row} from '@material/react-layout-grid';

// ------------------------------------------------- //

/*
  Passed is the name of the Pokémon as a key
  Passed it the reference URL that we must request in order to view the Pokémon's profile

  Seeing as though this is a list card we only want to use:
  1. Name
  2. Sprite (Icon)
  3. Id
  4. Type (e.g fire, ice, etc.)
*/

/*
  Trouble:
  1. img attribute src cannot be null
  2. Pokémon can be more than one type
*/

class PokémonCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokémon:[]
    }
    this.image = this.image.bind(this);
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then(response => {
      this.setState({pokémon:response.data});
      // console.log(this.state.pokémon.sprites.front_default);
    })
    .catch(error => {
      console.log(error);
    })
  }

  image(i) {
    // const image = i.back_default;
    console.log(i);
    // i.front_default undefined causes errors
    if (i === undefined) {
      return (
        <div>null</div>
      );
    } else {
      return (
        <div>hello</div>
      );
    }
  }

  render() {
    return (
      <section>
        <h1>{this.state.pokémon.name}</h1>
        <p>{this.state.pokémon.id}</p>
        {this.image(this.state.pokémon.sprites)}
      </section>
    );
  }
}

// ------------------------------------------------- //
// <img src={this.state.pokémon.sprites.front_default} alt="Sprite"/>
// {image(this.state.pokémon.sprites.front_default)}
//

export default PokémonCard;
