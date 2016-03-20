# Redux: Implementing Store from Scratch
Learn how to build a reasonable approximation of the Redux Store in 20 lines based on [video from Dan Abramov](https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch).

The project is setup as simple `Node.js` project with `webpack` to build the script for the browser. In `package.json` file `scripts` section is defined `build` task to build the `counter.js` for the browser.

To run this example in the browser it need to be build first:
	
	npm run build

This will create `bundle.js` script. To check the result open `index.html` page in the browser.