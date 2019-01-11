module.exports = {
  module: {
    rules: [
      {
        test: /\.cool$/,
        use: 'cool-loader'
      }
    ]
  },
  node: {
    fs: "empty"
  }
};
