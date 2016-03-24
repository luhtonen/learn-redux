# Redux: Passing the Store Down with <Provider> from React Redux
Learn how to use the that comes with React Redux instead of the hand-rolled implementation from the previous lesson from [the video by Dan Abramov](https://egghead.io/lessons/javascript-redux-passing-the-store-down-with-provider-from-react-redux).

The project is setup as simple `Node.js` project with `webpack` and `webpack-dev-server` to build the script for the browser and run the dev server. In `package.json` file `scripts` section are defined `build` task to build the `todos.jsx` and `start` task to start development server. The development server is configured to run with react hot reload, which does not require page refresh on code changes, but code is build and newly build `bundle.js` script is loaded automatically.

It is written with ES6 and ES7 styles and uses `babel` transformation to compile the code to be able to run it. To transform ES6 code `es2015` preset is used, to transform ES7's object spread operator `stage-2` preset is used.

This project uses `react`, `react-dom` to render React components, `redux` to control the state flow of the application and `react-redux` to automatically connect react and redux with `Provider` component.

To install all required dependencies execute simple `install` command:

	npm install
	
To run this example in the browser it need to be build first:
	
	npm run build

This will create `bundle.js` script. To check the result open `index.html` page in the browser. 

For continues development with automated build and script hot reload `start` command can be used:

	npm start

This command will start development server on [http://localhost:8080](http://localhost:8080).

## Webpack configuration
This project uses simple webpack setup, which is defined in `webpack.config.js` file.

	const webpack = require('webpack');
	const HtmlWebpackPlugin = require('html-webpack-plugin');

	module.exports = {
	  entry: [
	    'webpack-dev-server/client?http://localhost:8080',
	    'webpack/hot/only-dev-server',
	    './todos.jsx'
	  ],
	  output: {
	    path: __dirname + '/dist',
	    publicPath: '/',
	    filename: 'bundle.js'
	  },
	  resolve: {
	    extensions: ['', '.js', '.jsx']
	  },
	  module: {
	    loaders: [
	      {
	        test: /\.jsx?$/,
	        loader: 'react-hot!babel',
	        exclude: /node_modules/
	      }
	    ]
	  },
	  devServer: {
	    contentBase: './dist',
	    hot: true
	  },
	  plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new HtmlWebpackPlugin({
	      template: './node_modules/html-webpack-template/index.ejs',
	      title: JSON.stringify(require('./package.json').description),
	      appMountId: 'root',
	      inject: false
	    })
	  ]
	};

`entry` define the main file to be compiled, in this example it's `todos.jsx` which is JSX style JavaScript source script as well as `webpack-dev-server` with hot reload.

`output` defines the location and the filename of the build result. Here's it's located in `./dist` directory as the build script `__dirname + /dist` and filename is `bundle.js`.

In `module` section refined the `loaders`, which should be used to do the transformation. Here's only one loader is defined, which scans for all files with `.jsx` and `.js` extensions excluding `node_modules` directory and uses `babel` loader with `es2015`, `stage-2` and `react` presets to convert JXS, ES6 and ES7 style scripts into ES5 scripts and `react-hot` loader for hot reload built script.

`devServer` section defines `contentBase` of development server to point to `./dist` directory and enables hot reload.

In `plugins` section are defined configurations for `HotModuleReplacementPlugin` and `html-webpack-plugin` which is loading `index.ejs` template from `html-webpack-template` and insert into it `title`, `div` with `id` equal to value of `appMountId` to which React application will be mounted and `bundle.js` as script and put resulting `index.hml` into `output` directory.