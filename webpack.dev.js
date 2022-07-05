const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    main: './src/index.ts',
  },
  devServer: {
    port: 8080,
  },
  resolve: {
    extensions: ['.ts', '.js', 'css'],
  },
  performance: {
    maxEntrypointSize: 700000,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {loader: 'ts-loader', options: {transpileOnly: true}},
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new CopyPlugin({
      patterns: [{from: 'src/main.css', to: 'main.css'}],
    }),
  ],
};
