const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development')
    }
  }),
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require("./dll/vendor-manifest.json")
  }),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
  new BundleAnalyzerPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ExtractTextPlugin('bundle.css'),
  new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
  }),
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false,
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true
    },
    output: {
      comments: false,
    },
    exclude: [/\.min\.js$/gi]
  }),
  new webpack.optimize.CommonsChunkPlugin({
    children: true,
    async: true,
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
];

module.exports = {
  entry: "./src/index.js",
  plugins,
  output:{
      path: path.resolve(__dirname, '../server/public'),
      publicPath: '/server/public/',
      filename: "bundle.js"
  },
  module:{
      rules:[
          {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: "babel-loader?cacheDirectory",
              include: [
                  path.join(__dirname) //important for performance!
              ],
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
      ]
  },
  cache: true,
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  devServer: {
    historyApiFallback: true,
  }
}
