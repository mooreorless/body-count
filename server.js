import express from 'express';
import webpack from 'webpack';
import favicon from 'serve-favicon';
import webpackDevMiddleware from 'webpack-dev-middleware';


import config from './webpack.config';

const app = express();
// set up dev and production ports
const port = 3001;

app.use(favicon(__dirname + '/assets/favicon.ico'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/dist'));




app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
