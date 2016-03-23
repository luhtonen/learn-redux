# Redux: React Todo List Example (Adding a Todo)
Learn how to create a React todo list application using the reducers we wrote before from [the video by Dan Abramov](https://egghead.io/lessons/javascript-redux-react-todo-list-example-adding-a-todo).

The project is setup as simple `Node.js` project with `webpack` to build the script for the browser. In `package.json` file `scripts` section is defined `build` task to build the `todos.jsx`. 

It is written with ES6 and ES7 styles and uses `babel` transformation to compile the code to be able to run it. To transform ES6 code `es2015` preset is used, to transform ES7's object spread operator `stage-2` preset is used.

To install all required dependencies execute simple `install` command:

	npm install
	
To run this example in the browser it need to be build first:
	
	npm run build

This will create `bundle.js` script. To check the result open `index.html` page in the browser.

## Webpack configuration
This project uses simple webpack setup, which is defined in `webpack.config.js` file.

	const HtmlWebpackPlugin = require('html-webpack-plugin');

	module.exports = {
	  entry: [
	    './todos.jsx'
	  ],
	  output: {
	    path: __dirname + '/dist',
	    filename: 'bundle.js'
	  },
	  module: {
	    loaders: [
	      {
	        test: /\.jsx?$/,
	        loader: 'babel',
	        exclude: /node_modules/,
	        query: {
	          presets: ['es2015', 'stage-2', 'react']
	        }
	      }
	    ]
	  }, 
	  plugins: [
	    new HtmlWebpackPlugin({
	      template: './node_modules/html-webpack-template/index.ejs',
	      title: 'Redux: React Todo List Example (Adding a Todo)',
	      appMountId: 'root',
	      inject: false
	    })
	  ]
	};

`entry` define the main file to be compiled, in this example it's `todos.jsx` which is JSX style JavaScript source script.

`output` defines the location and the filename of the build result. Here's it's located in `./dist` directory as the build script `__dirname + /dist` and filename is `bundle.js`.

In `module` section refined the `loaders`, which should be used to do the transformation. Here's only one loader is defined, which scans for all files with `.jsx` and `.js` extensions excluding `node_modules` directory and uses `babel` loader with `es2015`, `stage-2` and `react` presets to convert JXS, ES6 and ES7 style scripts into ES5 scripts.

In `plugins` section is defined configuration for `html-webpack-plugin` which is loading `index.ejs` template from `html-webpack-template` and insert into it `title`, `div` with `id` equal to value of `appMountId` to which React application will be mounted and `bundle.js` as script and put resulting `index.hml` into `output` directory.