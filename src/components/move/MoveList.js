// ------------------------------------------------- //
// Evan MacHale - N00150552
// 01.02.19
// List of Moves
// ------------------------------------------------- //

import React, { Component } from 'react';
import axios from 'axios';
// Material Design Components
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline3 } from '@material/react-typography';

// ------------------------------------------------- //

// My components
import MoveCard from './MoveCard';

// ------------------------------------------------- //

class MoveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: []
    }
  }

  // https://pokeapi.co/api/v2/move/

  componentDidMount() {
    // axios.get('https://pokeapi.co/api/v2/pokedex/2/')
    // .then(response => {
    //
    //   // Loop through each entry and request each pokemon by entry
    //   response.data.pokemon_entries.forEach(pokedex => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokedex.entry_number}/`)
    //     .then(response => {
    //       /*
    //         I was mutating data -> use .concat instead of .push
    //         https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    //         https://stackoverflow.com/questions/41052598/reactjs-array-push-function-not-working-in-setstate/41052635
    //       */
    //       const pokemon_types = response.data.types.map(t => {return t.type.name}); // Can be more than one
    //       this.setState(prevState => {
    //         /*
    //           Is this messy? -> should I have logic in setState?
    //           Take previous list + add new types, then sort
    //           Replace old list with new sorted list for dropdown menu
    //         */
    //         const types_deduped = [...new Set(prevState.types.concat(pokemon_types))];
    //         types_deduped.sort();
    //         return {
    //           pokemon: prevState.pokemon.concat(response.data),
    //           types: types_deduped
    //         }
    //       });
    //     });
    //   });
    //
    // })
    // .catch(error => console.log(error));
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  render() {
    //
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <Headline3>Pokémon Moves</Headline3>
          </Cell>
        </Row>
        <Row>
          WIP
        </Row>
      </Grid>
    );
  }
}

// ------------------------------------------------- //

export default MoveList;

// ------------------------------------------------- //
