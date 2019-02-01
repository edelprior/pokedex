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

// My Components
import PokemonList from './components/pokemon/PokemonList'

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
      <div className='drawer-container'>
        <Drawer
          modal
          open={this.state.open}
          onClose={() => this.setState({open: false})}
        >
          <DrawerHeader>
            <DrawerTitle tag='h2'>Menu</DrawerTitle>
          </DrawerHeader>

          <DrawerContent>
            <List singleSelection selectedIndex={this.state.selectedIndex}>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
                <ListItemText primaryText='Pokédex' />
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <DrawerAppContent tag='main' className='drawer-app-content '>
          <TopAppBar
            title='Pokédex'
            className='top-app-bar-alternate'
            navigationIcon={<MaterialIcon
                icon='menu'
                onClick={() => this.setState({open: !this.state.open})}
            />}
          />

          <TopAppBarFixedAdjust>
              <PokemonList />
          </TopAppBarFixedAdjust>
        </DrawerAppContent>
      </div>
    );
  }
}

// ------------------------------------------------- //

export default App;

// ------------------------------------------------- //
