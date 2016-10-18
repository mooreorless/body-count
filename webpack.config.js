module.exports = {
  entry: './client/App.jsx',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
	      query: {
        	presets: ['react', 'es2015', 'stage-0']
	      }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
