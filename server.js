import express from 'express';
import webpack from 'webpack';
import async from 'async';
import easyimg from 'easyimage';
import { opencv as CV } from 'opencv';
import favicon from 'serve-favicon';
import webpackDevMiddleware from 'webpack-dev-middleware';

import config from './webpack.config';
import apiRoutes from './server/routes';

const app = express();
// set up dev and production ports
const port = 3001;

app.use(favicon(__dirname + '/assets/favicon.ico'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/dist'));


app.use('/', apiRoutes);


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
