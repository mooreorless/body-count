import express from 'express';
import async from 'async';
import easyimg from 'easyimage';
import cv from 'opencv';
import axios from 'axios';

import { updateActiveCams, countBodies, processImages } from '../helpers';
import options from '../config';

const router = express.Router();

const instance = axios.create({
  baseURL: options.url,
  timeout: options.timeout,
  headers: options.headers
});

const countries = require('country-list')();

let activeCams = [];
let bodiesFound = [];
let running = false;
let bodiesIndex = 0;
let completed = 0;
// let deactivate = '';
// let activate = '';


//post form to server
router.get('/activate', (req, res, next) => {

  // grab the urls to add to and remove from the array
  var webcamUrl = req.query['webcamUrl'];

  //send the url off to either be added to or removed from camera array
  updateActiveCams(webcamUrl);

  //call recursive image processing function, ONLY CALL IF IT ISNT ALREADY RUNNING
  if (!running) {
    processImages();
    running = true;
  }

  let data = {
    activeCams: activeCams,
    bodiesFound: bodiesFound
  }
  res.status(200).json(data);
});//end post callback

router.get('/cameras', (req, res) => {
  let search = req.query['search'];

  // Get country code
  let params = countries.getCode(search);
  console.log(params);

  instance.get(`/webcams/list/country=${params}?show=webcams:location,image,url`)
    .then((response) => {
      const webcams = response.data.result.webcams;

      res.status(200).json(webcams);
    })
    .catch((error) => {
      res.status(400).json(error);
    })
});

router.get('/test', (req, res) => {
  let query = req.query['webcamUrl'];
  console.log(query);
});


export default router;