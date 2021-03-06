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