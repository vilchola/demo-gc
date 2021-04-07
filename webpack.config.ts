/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as path from 'path';
import slsw from 'serverless-webpack';
import * as webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  context: path.resolve('.'),
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries as webpack.Entry,
  devtool: slsw.lib.webpack.isLocal ? 'cheap-module-eval-source-map' : 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    symlinks: false,
    cacheWithContext: false,
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(path.resolve('.'), '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesFromFile: true,
    }),
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../node_modules'),
    }),
    nodeExternals({
      modulesDir: path.resolve(__dirname, './node_modules'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(path.resolve('.'), '.serverless'),
            path.resolve(path.resolve('.'), '.webpack'),
          ],
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
  plugins: [],
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
module.exports = config;
