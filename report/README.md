
# Project Report

Evan MacHale

N00150552 ~ Year 4 Creative Computing

Pokédex Web Application with React.

# Introduction

This project is based upon a video game in which players catch and train various species of monsters known as [Pokémon](https://en.wikipedia.org/wiki/Pok%C3%A9mon_(video_game_series)). In this game there is a database known as the [Pokédex](https://www.pokemon.com/us/pokedex/) in which players may search and browse Pokémon. This project uses the [PokéAPI](https://pokeapi.co/).

# User Stories

There are only two types of users who play Pokémon and wish to use the Pokédex. The first is a casual player who searches for Pokémon that they enjoy using; The second is a competitive player who searches for Pokémon based on their statistics to be used in tournament play.

Casual player - conditions/satisfactions :

- As a casual player, I want to search for _fire type_ pokémon to use, so that I can use my favourite pokémon type in my team.
- As a casual player, I want to search for _fire type_ moves, so to figure out the best moves my fire type pokémon may learn.

Competitive player - conditions/satisfactions :

- As a competitive player, I want to search the _pokémon Venusaur_ to check whether it can learn the trick room ability, so to beat a certain tournament team.
- As a competitive player, I want to search for powerful _grass moves_ that Venusaur may learn, so to compensate for Venusaur’s lack of attack.

Broken down details :

- Provide list components for pokémon, moves and abilities that players may browse.
- Proved navigation menus to travel between each section.
- Provide a system of list filtering so that players may sort by data such as type, stats and categories.
- Provide conditional components that display a selected list items detailed data.

# Wireframe 

Wireframe (pre-development) from stories depicts three pages : 

- Home page
- Pokémon page
- Moves page

Each page will be wrapped in a `<LayoutGrid/>`

![Home](https://raw.githubusercontent.com/larryzodiac/pokedex/master/report/images/home.png)

![Pokémon](https://raw.githubusercontent.com/larryzodiac/pokedex/master/report/images/pokemon.png)

![Moves](https://raw.githubusercontent.com/larryzodiac/pokedex/master/report/images/moves.png)

The `<Drawer/>` Component :

![Menu](https://raw.githubusercontent.com/larryzodiac/pokedex/master/report/images/menu.png)

# Application Description

The React application is composed of an _App.js_, _Index.js_ and _components_ folder.

The components folder contains subfolders for each page’s components e.g `<PokemonList/>` and `<MoveList/>` and a collection of input components for universal use e.g `<Search/>` bar and `<Dropdown/>` select components.

App.js is where the page components are compiled for use and rendered based on conditions and using [react-router](https://reacttraining.com/react-router/core/guides/philosophy).

Index.js imports App.js and appends the full application to the dom.

### App.js

Inside this file is utilised [Material Design Components(MDC) React](https://github.com/material-components/material-components-web-react)’s `<Drawer/>` with `<TopAppBar/>` wrapped by react-router `<HashRouter/>`.

`<HashRouter/>` acts as a container for the app, inside which can be found MDC `<Drawer/>` and `<DrawerAppContent/>`. `<Drawer/>` contains a header and content with an MDC `<List/>` with multiple react-router `<Link/>`s.

After is `<DrawerAppContent/>`, where the MDC `<TopAppBar/>` lives with react-router `<Routes/>`, rendering different pages. These pages are `<PokemonList/>`, `<MoveList/>` and `<Home/>`.

App.js has a state of `open` to determine whether or not the `<Drawer/>` modal is open, and `selectedIndex` which keeps track of the selected route.

Pseudo-code:
 
```javascript

class App {

  <HashRouter>
    <main>

      <Drawer>
        <DrawerHeader />
        <DrawerContent>
          <List >
            // Links ...
            <ListItem>
              </Link>
            </ListItem>
            // ...
          </List>
        </DrawerContent>
      </Drawer>

      <DrawerAppContent>
        <TopAppBar />
        <TopAppBarFixedAdjust>
          // Your awesome content here ...
          <Route component={Home}/>
          <Route component={PokemonList}/>
        </TopAppBarFixedAdjust>
      </DrawerAppContent>

    </main>
  </HashRouter>

}

export App;
```

### Home.js
