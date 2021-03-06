// ------------------------------------------------- //
// Evan MacHale - N00150552
// 12.01.19
// React + Material
// ------------------------------------------------- //
// https://github.com/material-components/material-components-web-react#step-3a-use-compiled-css
// https://sass-lang.com/guide
// ------------------------------------------------- //

import React, { Component } from 'react';
// Material Design Components
import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import Drawer, {
  DrawerAppContent,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText
} from '@material/react-list';

// ------------------------------------------------- //

// React-Router-Dom
import { HashRouter, Route, Link } from 'react-router-dom';

// ------------------------------------------------- //

// My Components
import Home from './components/Home'
import PokemonList from './components/pokemon/PokemonList'
import MoveList from './components/move/MoveList'

// ------------------------------------------------- //

import './App.scss';

// ------------------------------------------------- //

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedIndex: 0
    }
  }

  // componentDidMount() {
    /*
      We only really want to work with:
      1. List of Pokemon
      2. Pokemon moves
      3. Pokemon abilities

      At the following API addresses:
      1. https://pokeapi.co/api/v2/pokemon/
      2. https://pokeapi.co/api/v2/move/
      3. https://pokeapi.co/api/v2/ability/
    */
    // axios.get('https://pokeapi.co/api/v2/')
    // .then(response => {
    //   this.setState({
    //     pokemon: response.data.pokedex,
    //     moves: response.data.move,
    //     abilities: response.data.ability
    //   });
    //   // console.log(this.state);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
  // }

  render() {
    return (
      <HashRouter>
        <main className='drawer-container drawer-alternate'>
          <Drawer
            modal
            open={this.state.open}
            onClose={() => this.setState({open: false})}
          >
            <DrawerHeader>
              <DrawerTitle tag='h2'>Menu</DrawerTitle>
            </DrawerHeader>

            <DrawerContent>
              <List className='list-alternate' singleSelection selectedIndex={this.state.selectedIndex}>

                {/* React Router <a> doesn't like MDC ul styles -> have to add classNames to <Link/> */}
                <ListItem>
                  <Link to="/" className='mdc-list-item mdc-list-item--disabled' onClick={() => this.setState({open: !this.state.open, selectedIndex:0})}>
                    <ListItemGraphic graphic={<MaterialIcon icon='home'/>} />
                    <ListItemText primaryText='Home' />
                  </Link>
                </ListItem>

                <ListItem>
                  <Link to="/poke/" className='mdc-list-item mdc-list-item--disabled' onClick={() => this.setState({open: !this.state.open, selectedIndex:1})}>
                    <ListItemGraphic graphic={<MaterialIcon icon='public'/>} />
                    <ListItemText primaryText='Pokédex' />
                  </Link>
                </ListItem>

                <ListItem>
                  <Link to="/moves/" className='mdc-list-item mdc-list-item--disabled' onClick={() => this.setState({open: !this.state.open, selectedIndex:2})}>
                    <ListItemGraphic graphic={<MaterialIcon icon='flash_on'/>} />
                    <ListItemText primaryText='Moves' />
                  </Link>
                </ListItem>

              </List>
            </DrawerContent>
          </Drawer>

          <DrawerAppContent tag='main' className='drawer-app-content '>
            <TopAppBar
              className='top-app-bar-alternate'
              navigationIcon={<MaterialIcon
                  icon='menu'
                  onClick={() => this.setState({open: !this.state.open})}
              />}
            />

            {/*
              localhost:3000 is / and works fine, but defaults to /poke/ on gh-pages
              This is because deployed at https://larryzodiac.github.io/pokedex/
              But https://larryzodiac.github.io/ matches / so we get a blank page
              Dan Abramov says:
              Use `process.env.PUBLIC_URL` in your route definitions so that they work both in development and after deployment.
              https://github.com/facebook/create-react-app/issues/1765
            */}

            <TopAppBarFixedAdjust>
              <Route exact path='/' component={Home}/>
              <Route path='/poke' component={PokemonList}/>
              <Route path='/moves' component={MoveList}/>
            </TopAppBarFixedAdjust>
          </DrawerAppContent>
        </main>
      </HashRouter>
    );
  }
}

// ------------------------------------------------- //

export default App;

// ------------------------------------------------- //
