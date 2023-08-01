const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src', 'assets'),
    '@components': path.resolve(__dirname, 'src', 'components'),
    '@pages': path.resolve(__dirname, 'src', 'pages'),
    '@services': path.resolve(__dirname, 'src', 'services'),
    '@utils': path.resolve(__dirname, 'src', 'utils'),
  })
);
