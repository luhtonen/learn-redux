# Redux: React Counter Example
Learn how to create a complete simple application with just React and Redux from [the video by Dan Abramov](https://egghead.io/lessons/javascript-redux-react-counter-example).

The project is setup as simple `Node.js` project with `webpack` to build the script for the browser. In `package.json` file `scripts` section is defined `build` task to build the `counter.jsx`.

To run this example in the browser it need to be build first:
	
	npm run build

This will create `bundle.js` script. To check the result open `index.html` page in the browser.

## Webpack configuration
This project uses simple webpack setup, which is defined in `webpack.config.js` file.

	module.exports = {
	  entry: [
	    './counter.jsx'
	  ],
	  output: {
	    path: __dirname,
	    publicPath: '/',
	    filename: 'bundle.js'
	  },
	  module: {
	    loaders: [
	      {
	        test: /\.jsx?$/,
	        loader: 'babel',
	        exclude: /node_modules/,
	        query: {
	          presets: ['es2015', 'react']
	        }
	      }
	    ]
	  }
	};

`entry` define the main file to be compiled, in this example it's `counter.jsx` which is JSX style JavaScript source script.

`output` defines the location and the filename of the build result. Here's it's located in the same directory as the build script `__dirname` and filename is `bundle.js`.

In `module` section refined the `loaders`, which should be used to do the transformation. Here's only one loader is defined, which scans for all files with `.jsx` and `.js` extensions excluding `node_modules` directory and uses `babel` loader with `es2015` and `react` presets to convert JXS and ES6 style scripts into ES5 scripts.