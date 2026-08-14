const path = require('path');

module.exports = {
  entry: './task-id-finder.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: false,
  },
  output: {
    filename: 'task-id-finder.js',
    path: path.resolve(__dirname, 'dist')
  },
};
