// ------------------------------------------------- //
// Evan MacHale - N00150552
// 12.01.19
// Pokemon Card
// ------------------------------------------------- //

import React, { Component } from 'react';
import axios from 'axios';
// Material Design Components
import {Cell, Grid, Row} from '@material/react-layout-grid';

// ------------------------------------------------- //

/*
  Passed is the name of the Pokemon as a key
  Passed is the reference URL that we must request in order to view the Pokemon's profile

  Seeing as though this is a list card we only want to use:
  1. Name
  2. Sprite (Icon)
  3. Id
  4. Type (e.g fire, ice, etc.)
*/

/*
  Trouble I've come across:
  1. img attribute src cannot be null (INCORRECT - See below)
  2. Pokemon can be more than one type
*/

/*
  I keep getting this error when trying to render the sprites
  Can't see what's happening in code
  What happens in memory is that I'm calling setState on a component that doesn't exist anymore..

  Warning: Can't perform a React state update on an unmounted component.
  This is a no-op, but it indicates a memory leak in your application.
  To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

  Promises + Asynchronous
  I'm doing asynchronous stuff with axios and a callback with setState
  I need to figure out a way to stop calling when it no longer needs to be called
  But I'm using promises w/ axios
  I can't cancel promises

  When PokemonCard gets unmounted, setState will continue to be called on something that doesn't exist.
*/

class PokemonCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:null,
      sprite:null,
      id:null,
      types:[]
    }
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then(response => {
      this.setState({
        name: response.data.name,
        sprite: response.data.sprites.front_default,
        id: response.data.id,
        // types: response.data.types.map(t => this.types.push(t.type.name))
        types: response.data.types
      });
      // console.log(this.types);
      // console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <section>
        <h1>{this.state.name}</h1>
        <p>{this.state.id}</p>
        <img
          alt={this.state.name}
          src={this.state.sprite}
        />
        {this.state.types.map(t => {
          return(
            <p>{t.type.name}</p>
          )
        })}
      </section>
    );
  }
}

// ------------------------------------------------- //
// <img
//   alt={this.state.pokemon.name}
//   src={this.state.pokemon.sprites.front_default}
// />

export default PokemonCard;
