// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',  // Your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,   // استهداف جميع ملفات CSS
        use: ['style-loader', 'css-loader']  // تحميل CSS داخل JavaScript
    },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Your HTML template
    }),
  ],
  mode: 'development', // Or 'production' for production build
};
