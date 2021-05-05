const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  entry: path.join(__dirname, 'src/sample.js'),
  module: {
    rules: [
      {
        // when bundling application's own source code
        // transpile using Babel which uses .babelrc file
        // and instruments code using babel-plugin-istanbul
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: path.join(__dirname, 'src/index.template.html')
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
