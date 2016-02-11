var path = require('path');

module.exports = {
  cache: true,
  debug: true,
  target: 'atom',
  devtool: 'source-map',
  entry: [
    './src/main/main.js',
    './src/renderer/index.js'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('./src')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer-loader?{browsers:["last 3 versions", "Firefox ESR"]}'
    }]
  }
};
