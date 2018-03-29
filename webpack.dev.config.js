const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/server/index.html",
      filename: "./index.html"
    })
  ]
}

module.exports = merge(baseConfig, config);
