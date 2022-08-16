module.exports = {
  ...require('eslint-config/vite-react.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
