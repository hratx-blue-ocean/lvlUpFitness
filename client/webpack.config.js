const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public');
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
  filename: 'bundle.js',
  path: DIST_DIR
  },
  module : {
    rules : [
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /npm\.js$/,
        loader: 'string-replace-loader',
        include: path.resolve('node_modules/firebaseui/dist'),
        options: {
          search: 'require(\'firebase/app\');',
          replace: 'require(\'firebase/app\').default;',
        },
      },
    ]
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 9000
  }
};