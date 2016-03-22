# Redux: Store Methods example
This is simple example of Redux Store methods: `getState`, `dispatch` and `subscribe`. It is based on [the video by Dan Abramov](https://egghead.io/lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe).

This project have 2 scripts: `counter_cmd.js` to run in command line and `counter.js` to run in the browser.

The project is setup as simple `Node.js` project with `webpack` to build the script for the browser. In `package.json` file `scripts` section are defined 2 tasks: `build` to build the `counter.js` for the browser and `test` to run `counter_cmd.js` from the command line

To run this example on the command line execute following command:

	npm test
	
This will output to the terminal information about the state and it's changes.

To run this example in the browser it need to be build first:
	
	npm run build

This will create `bundle.js` script. To check the result open `index.html` page in the browser.

## Webpack configuration
This project uses simple webpack setup, which is defined in `webpack.config.js` file.

	module.exports = {
	  entry: [
	    './counter.js'
	  ],
	  output: {
	    path: __dirname,
	    publicPath: '/',
	    filename: 'bundle.js'
	  },
	  module: {
	    loaders: [
	      {
	        test: /\.js$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
	          presets: ['es2015']
	        }
	      }
	    ]
	  }
	};

`entry` define the main file to be compiled, in this example it's `counter.js`

`output` defines the location and the filename of the build result. Here's it's located in the same directory as the build script `__dirname` and filename is `bundle.js`.

In `module` section refined the `loaders`, which should be used to do the transformation. Here's only one loader is defined, which scans for all files with `.js` extension excluding `node_modules` directory and uses `babel-loader` with `es2015` preset to coonvert ES6 style scripts into ES5 scripts.