const path = require('path');

module.exports = {
  entry: './src/Winwheel.js',
  output: {
    filename: 'Winwheel.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Winwheel',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
      }
    ]
  }
};
