
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

The React application is composed of an _App.js_, _Index.js_ and a _components_ folder.

The components folder contains subfolders for each page’s components e.g `<PokemonList/>` and `<MoveList/>` and a collection of input components for universal use e.g `<Search/>` bar and `<Dropdown/>` select components.

App.js is where the page components are imported for use and rendered based on conditions and using [react-router](https://reacttraining.com/react-router/core/guides/philosophy).

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

### Home.js + Request Handling for the Application

The `<Home/>` component is rendered based on App's routes and acts as a landing page for the application. The page contains information and a randomly generated short list of Pokémon.

In the `componentDidMount()` lifecycle method a network request is instantiated using [Axios](https://www.npmjs.com/package/axios).

When calling the API endpoint, by default, a list _page_ will contain up to 20 resources. It can be changed with the _limit_ or _offset_ query.

```javascript
axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${Math.floor((Math.random() * 600) + 1)}&limit=36"`)
```

The data response of this request is an array of Pokémon and their Id's. However, the _sprites_ and other data for each Pokémon is found at a specific named endpoint.

i.e _pokeapi.co/api/v2/pokemon/_ returns the full array with Id's, pokeapi.co/api/v2/pokemon/46/ returns a pokémon's data.

To tackle this a `forEach()` array method is called over each array element, with an individual request being invoked with the array element's Id. This solution is the basis for how the API data is stored.

The result of each request with an Id is appended to an array in the state using the `.concat()` array method. This is important as it does not mutate our state data.

```javascript
.then(response => {
 // Loop through each entry and request each pokemon by entry
 response.data.results.forEach(pokemon => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`)
   .then(response => {
   this.setState(prevState => {...});
  });
 });
})
```

The state array of sprites is then mapped over passing the image data as props to an image element.

This is the premise for all requests made in the rest of this application.

### PokémonList.js/MoveList.js + Filtering State Data

The request made in the `componentDidMount()` method are the exact same for these components with minor alterations. 

The data such as pokémon _type_ and _category_ are to be placed in dropdown select inputs. 

These types, for example, are iterated over with a `.map()` and duplicates are removed and added to state. This _de-duplicated_ array is passed as props to the input components.

```javascript
const types_deduped = [...new Set(prevState.types.concat(pokemon_types))];
types_deduped.sort();
```
```javascript
<Dropdown 
 types={[''].concat(this.state.types)}
 handleChange={this.handleChange}
/>
```

We concatenate `''` so to display pokémon with no filter to type i.e all pokémon.

Once the input components are poplated with options and passed an `onChange` handler method, the selected input is used to filter the state results. 

The state data is mapped over using the `.map()` method and filtered using conditional statements based on the selected input state. The results of which are evaluated by braces in the _return_ statement.

### Components

The other components in the application `<Dropdown/>`, `<Search/>` and `<Loading/>` are used in both pages. 

These components use `<React.Fragments/>` to return multiple elements without adding extra nodes to the DOM.

`<Loading/>` is worth mentioning as it utilises the `componentDidUpdate()` life cycle method. 

This is controlled by a _loading_ state proprety.

A variable is used to check the length of the dataset : 

```
number_of_pokemon = response.data.pokemon_entries.length;
```

Seeing as though Axios requests are async, the only way to check if the promises are fulfilled is to call another `.then()`.

Whenever I tried to setState here I recieved a memory leak error. I understand what this means, however, I couldn't figure out how to fix it. I used the update as a work around.

```javascript
componentDidUpdate() {
 if (this.state.loading && this.state.pokemon.length >= number_of_pokemon) {
  this.setState({
   loading: false
  });
 }
}
```

```
// Render the loading bar or the component prop
<Loading loading={this.state.loading} bar={true} component={pokemon}/>
```

# References 

- [Material Components](https://github.com/material-components/material-components-web-react)
- [Kent C. Dodds](https://egghead.io/courses/the-beginner-s-guide-to-react)
- [Avoid setState warnings on unmounted React components](https://www.youtube.com/watch?v=8BNdxFzMeVg&t=676s)
- [How to deploy React application to GitHub Pages](https://www.youtube.com/watch?v=1Y-PqBH-htk)
- [The Power Of Not Mutating Data](https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data)
- [React Lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Sass Basics](https://sass-lang.com/guide)
- [Gh-pages deployment problems with react-router #1765](https://github.com/facebook/create-react-app/issues/1765#issuecomment-285114194)
