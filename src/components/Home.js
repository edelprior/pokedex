// ------------------------------------------------- //
// Evan MacHale - N00150552
// 1.02.19
// Landing page of app
// ------------------------------------------------- //

import React, { Component } from 'react';
import axios from 'axios';
// Material Design Components
import { Cell, Grid, Row } from '@material/react-layout-grid';
import {
  Body1,
  Body2,
  Button,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Subtitle1,
  Subtitle2,
} from '@material/react-typography';

// ------------------------------------------------- //

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprites: []
    }
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${Math.floor((Math.random() * 600) + 1)}&limit=36"`)
    .then(response => {

      // Loop through each entry and request each pokemon by entry
      response.data.results.forEach(pokemon => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`)
        .then(response => {
          this.setState(prevState => {
            return {
              sprites: prevState.sprites.concat(response.data.sprites.front_default),
            }
          });
        });
      });

    })
    .catch(error => console.log(error));
  }

  render() {

    const sprites = this.state.sprites.map(s => <Sprite key={s} sprite={s}/> );

    return (
      <Grid>
        <Row>

          <Cell columns={1}/>

          <Cell columns={10}>

            {/* Title */}
            <Row>
              <Cell columns={12}>
                <Headline1>Pokédex</Headline1>
              </Cell>
            </Row>

            {/* Main body, print filterd moves */}
            <Row>
              <Cell columns={5}>
                <Row>{sprites}</Row>
              </Cell>
              <Cell columns={1}/>
              <Cell className='list-item-links' columns={6}>
                <Overline><a href='http://www.iadt.ie/courses/creative-computing'>Dún Laoghaire's Institue of Art, Design & Technology</a> / / Advanced JavaScript Module</Overline>
                <Headline5>Pokémon API web application built with Facebook's <a href='https://reactjs.org/docs/getting-started.html'>React</a> & Google's <a href='https://github.com/material-components/material-components-web-react'>Material Design</a> components.</Headline5>
                <Headline5><a href='https://github.com/larryzodiac/pokedex'>Code</a> hosted with GitHub pages. Data from <a href='https://pokeapi.co/'>PokéAPI.</a></Headline5>
                <Headline5>By <a href='https://github.com/larryzodiac'>Evan.</a></Headline5>
              </Cell>
            </Row>

          </Cell>

          <Cell columns={1}/>

        </Row>
      </Grid>
    );
  }
}

function Sprite(props) {
  return (
    <React.Fragment>
      <img
        alt=''
        src={props.sprite}
      />
    </React.Fragment>
  );
}

// ------------------------------------------------- //

export default Home;

// ------------------------------------------------- //
