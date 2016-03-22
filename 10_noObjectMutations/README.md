# Redux: Avoiding Object Mutations with Object.assign() and ...spread
Learn how to use Object.assign() and the spread operator proposed for ES7 to avoid mutating objects from [the video by Dan Abramov](https://egghead.io/lessons/javascript-redux-avoiding-object-mutations-with-object-assign-and-spread).

This project is setup as simple `Node.js` project. All required dependencies are defined in `package.json` file. 

It is written with ES6 and ES7 styles and uses `babel` transformation to compile the code to be able to run it. To transform ES6 code `es2015` preset is used, to transform ES7's object spread operator `stage-2` preset is used. It's also use `expect` module to perform checks.

To install all required dependencies execute simple `install` command:

	npm install
	
To run this example execute simple `test` command:

	npm test

To suppress npm's message `--silent` option could be used like this:

	npm test --silent

This will output only running script's output and errors, removing all noise from npm.