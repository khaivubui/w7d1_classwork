const path = require ('path');

module.exports = {
  context: __dirname,
  entry: './frontend/todo_redux.jsx',
  output: {
    path: path.resolve(__dirname, '..', 'todos_server', 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
