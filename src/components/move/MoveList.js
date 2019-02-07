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
import Move from './Move'
import Search from './../Search';
import Dropdown from './../Dropdown';
import Loading from './../Loading'

// ------------------------------------------------- //

let number_of_moves = 200;

class MoveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [],
      types: [],
      categories: [],
      searchText: '',
      selectedType: '',
      selectedCategory: '',
      selectedMove: '',
      loading: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/move/?limit=${number_of_moves}`)
    .then(response => {
      // Loop through each entry and request each pokemon by entry
      response.data.results.forEach(move => {
        axios.get(`https://pokeapi.co/api/v2/move/${move.name}/`)
        .then(response => {
          const move_data = [{
            id: response.data.id,
            name: response.data.name,
            type: response.data.type.name,
            category: response.data.damage_class.name,
            pp: response.data.pp,
            power: response.data.power,
            accuracy: response.data.accuracy,
            priority: response.data.priority,
            description : response.data.flavor_text_entries[2].flavor_text,
            effect: response.data.effect_entries[0].effect
          }];
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

  componentDidUpdate() {
    // eslint-disable-next-line
    {/*
      selectedMove starts off empty
      after moves request finished set selectedMove to first in array
      Just so theres a move displayed at first
      If in render, state.moves[0] is undefined, request async -> crashes app
      http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    */}
    // eslint-disable-next-line
    {/*
      selectedMove starts off empty
      I want to update the <Move/> component and pass it updated props from the finished request
      I'm usure if this is the correct way as I am not comparing states
      Only checking to see if selectedMove is empty to give it some placeholder.
    */}
    if (!this.state.selectedMove && this.state.moves.length >= number_of_moves) {
      this.setState({
        selectedMove: this.state.moves[0],
        loading: false
      });
    }
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

  handleClick = (event) => {
    let id;
    event.target.id === 0 ? id = 0 : id = event.target.id - 1;
    const move = this.state.moves[id];
    this.setState({
      selectedMove: move
    });
  }

  render() {

    const moves = this.state.moves.map(m => {
      const nameMatch = m.name.startsWith(this.state.searchText);
      const typeMatch = (this.state.selectedType === m.type || this.state.selectedType === '');
      const categoryMatch = (this.state.selectedCategory === m.category || this.state.selectedCategory === '');
      return (nameMatch && typeMatch && categoryMatch) ? (
        <Move
          key = {m.id}
          id = {m.id}
          name = {m.name}
          type = {m.type}
          category = {m.category}
          onClick = {this.handleClick}
        />
      ) : null;
    });

    return (
      <Grid>
        <Row>

          <Cell columns={1}/>

          <Cell columns={10}>

            <Row>
              <Cell columns={5}>

                {/* Title */}
                <Row>
                  <Cell columns={12}>
                    <Headline3>Pokémon Moves</Headline3>
                  </Cell>
                </Row>

                {/* Inputs */}
                <Row>
                  <Cell columns={4}>
                    <Search
                      name='searchText'
                      label='Search Moves'
                      value={this.state.searchText}
                      handleChange={this.handleChange}
                    />
                  </Cell>
                  <Cell columns={2}>
                    <Dropdown
                      name='selectedType'
                      label='Type'
                      value={this.state.selectedType}
                      types={[''].concat(this.state.types)}
                      handleChange={this.handleChange}
                    />
                  </Cell>
                  <Cell columns={3}>
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
                  <Cell columns={12}>
                    <List twoLine>
                      {/*
                        loading checks to see if this.state.moves is fully populated
                        bar specify need to show loading
                      */}
                      <Loading loading={this.state.loading} bar={true} component={moves}/>
                    </List>
                  </Cell>
                </Row>
              </Cell>

              <Cell columns={1}/>

              {/* Want to add static <Move/> component here*/}
              <Cell columns={5}>
                <Cell>
                  <Loading loading={this.state.loading} bar={false} component={
                    <MoveCard
                      name = {this.state.selectedMove.name}
                      type = {this.state.selectedMove.type}
                      category = {this.state.selectedMove.category}
                      pp = {this.state.selectedMove.pp}
                      power = {this.state.selectedMove.power}
                      accuracy = {this.state.selectedMove.accuracy}
                      priority = {this.state.selectedMove.priority}
                      description = {this.state.selectedMove.description}
                      effect = {this.state.selectedMove.effect}
                    />
                  }/>
                </Cell>
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
