# Pokédex

Year 4 Advanced JavaScript Module Assignment w/ React + Material

Assessment: _Using an API and front-end framework, develop a web application with React.js_

API used is the [PokéAPI](https://pokeapi.co/).

Site hosted with [gh-pages](https://www.npmjs.com/package/gh-pages) @ [larryzodiac.github.io/pokedex/](https://larryzodiac.github.io/pokedex/).

# Local Setup

This React application uses [MDC React](https://github.com/material-components/material-components-web-react) and requires a bit of extra setup to get started. To be able to run this locally you will need to [install Sass](https://sass-lang.com/install) using `npm install -g sass`.

Then clone the repository and install the app regularly with `npm install`.

To get MDC React Components to work with `create-react-app` you need to set a `SASS_PATH` environment variable that points to your `node_modules` directory. To quickly do this on OS X enter the following in your command line:

```sh
export SASS_PATH=./node_modules
```

If you're on Windows use the following:

```bat
SET SASS_PATH=.\node_modules
```

If you want to permanently add this to your environment, read this doc about [adding environment variables](https://github.com/material-components/material-components-web-react/blob/master/docs/adding-env-variables.md). 

You should now be ready to go, navigate to the app in your command line and run `npm start`

This readme is based on the MDC React getting started readme. If you have any problems refer to it [here](https://github.com/material-components/material-components-web-react/blob/master/README.md).
