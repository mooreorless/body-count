import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';


import config from './webpack.config.js';

const app = express();
// set up dev and production ports
const port = 3000;

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/dist'));




app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
