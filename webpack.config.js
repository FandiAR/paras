const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|jpg|jpeg|woff|ico|eot|png|svg|pdf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        exclude: [
          /\.(js|mjs|jsx|ts|tsx)$/,
          /\.html$/,
          /\.json$/,
          /theme[/\\]icons[/\\][^/\\]+\.svg$/,
        ],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
};
