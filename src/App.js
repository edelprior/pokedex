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
import { BrowserRouter, Route, Link } from 'react-router-dom';

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

  componentDidMount() {
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
  }

  render() {
    return (
      <BrowserRouter>
        <main className='drawer-container'>
          <Drawer
            modal
            open={this.state.open}
            onClose={() => this.setState({open: false})}
          >
            <DrawerHeader>
              <DrawerTitle tag='h2'>Menu</DrawerTitle>
            </DrawerHeader>

            <DrawerContent>
              <List className='list-item-links' singleSelection selectedIndex={this.state.selectedIndex}>

                {/* React Router <a> doesn't like MDC ul styles -> have to add classNames to <Link/> */}
                <ListItem>
                  <Link to="/pokedex/" className='mdc-list-item mdc-list-item--disabled' onClick={() => this.setState({open: !this.state.open})}>
                    <ListItemGraphic graphic={<MaterialIcon icon='home'/>} />
                    <ListItemText primaryText='Home' />
                  </Link>
                </ListItem>

                <ListItem>
                  <Link to="/pokemon/" className='mdc-list-item mdc-list-item--disabled' onClick={() => this.setState({open: !this.state.open})}>
                    <ListItemGraphic graphic={<MaterialIcon icon='public'/>} />
                    <ListItemText primaryText='Pokédex' />
                  </Link>
                </ListItem>

                <ListItem>
                  <Link to="/moves/" className='mdc-list-item mdc-list-item--disabled' onClick={() => this.setState({open: !this.state.open})}>
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

            <TopAppBarFixedAdjust>
              <Route path='/pokedex' component={Home}/>
              <Route path='/pokemon' component={PokemonList}/>
              <Route path='/moves' component={MoveList}/>
            </TopAppBarFixedAdjust>
          </DrawerAppContent>
        </main>
      </BrowserRouter>
    );
  }
}

// ------------------------------------------------- //

export default App;

// ------------------------------------------------- //
