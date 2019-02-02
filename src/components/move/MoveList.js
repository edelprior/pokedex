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
import List from '@material/react-list';

// ------------------------------------------------- //

// My components
import MoveCard from './MoveCard';
import Search from './../Search';
import Dropdown from './../Dropdown';

// ------------------------------------------------- //

class MoveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [],
      types: [],
      categories: [],
      searchText: '',
      selectedType: '',
      selectedCategory: ''
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/move/?limit=200')
    .then(response => {

      // Loop through each entry and request each pokemon by entry
      response.data.results.forEach(move => {
        axios.get(`https://pokeapi.co/api/v2/move/${move.name}/`)
        .then(response => {
          const move_data = [{name:response.data.name, type:response.data.type.name, category:response.data.damage_class.name}];
          const move_types = [response.data.type.name];
          const move_categories = [response.data.damage_class.name];
          this.setState(prevState => {
            const types_deduped = [...new Set(prevState.types.concat(move_types))];
            types_deduped.sort();
            const categories_deduped = [...new Set(prevState.categories.concat(move_categories))];
            categories_deduped.sort();
            return {
              moves: prevState.moves.concat(move_data),
              types: types_deduped,
              categories: categories_deduped
            }
          });
        });
      });

    })
    .catch(error => console.log(error));
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

    const moves = this.state.moves.map(m => {
      const nameMatch = m.name.startsWith(this.state.searchText);
      const typeMatch = (this.state.selectedType === m.type || this.state.selectedType === '');
      const categoryMatch = (this.state.selectedCategory === m.category || this.state.selectedCategory === '');
      return (nameMatch && typeMatch && categoryMatch) ? (
        <MoveCard
          key = {m.name}
          name = {m.name}
          type = {m.type}
          category = {m.category}
        />
      ) : null;
    });

    return (
      <Grid>
        <Row>

          <Cell columns={1}/>

          <Cell columns={10}>

            {/* Title */}
            <Row>
              <Cell columns={12}>
                <Headline3>Pokémon Moves</Headline3>
              </Cell>
            </Row>

            {/* Inputs */}
            <Row>
              <Cell columns={2}>
                <Search
                  name='searchText'
                  label='Search Moves'
                  value={this.state.searchText}
                  handleChange={this.handleChange}
                />
              </Cell>
              <Cell columns={1}>
                <Dropdown
                  name='selectedType'
                  label='Type'
                  value={this.state.selectedType}
                  types={[''].concat(this.state.types)}
                  handleChange={this.handleChange}
                />
              </Cell>
              <Cell columns={1}>
                <Dropdown
                  name='selectedCategory'
                  label='Category'
                  value={this.state.selectedCategory}
                  types={[''].concat(this.state.categories)}
                  handleChange={this.handleChange}
                />
              </Cell>
            </Row>

            <br/>

            {/* Main body, print filterd moves */}
            <Row>
              <Cell columns={5}>
                <List twoLine>
                  <div>{moves}</div>
                </List>
              </Cell>
              <Cell>
                {/* Want to add static <Move/> component here*/}
              </Cell>
            </Row>

          </Cell>

          <Cell columns={1}/>

        </Row>
      </Grid>
    );
  }
}

// ------------------------------------------------- //

export default MoveList;

// ------------------------------------------------- //
