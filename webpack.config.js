const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.jsx',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath:'dist/'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/'
          }
        }],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //       NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new UglifyJSPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Good!!'
    })
  ],
  resolve: {
      extensions: ['.js', '.jsx', '.less', '.scss', '.css'] //后缀名自动补全
  }

};
