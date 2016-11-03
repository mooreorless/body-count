import express from 'express';
import async from 'async';
import easyimg from 'easyimage';
import cv from 'opencv';

// import options from './config';

import { updateActiveCams, countBodies, processImages } from '../helpers';

const router = express.Router();

let activeCams = [];
let bodiesFound = [];
let running = false;
let bodiesIndex = 0;
let completed = 0;
// let deactivate = '';
// let activate = '';


//post form to server
router.get('/upload', (req, res, next) => {

  // grab the urls to add to and remove from the array
  var webcamUrl = req.query['webcamUrl'];
  
  //send the url off to either be added to or removed from camera array
  updateActiveCams(webcamUrl);

  //call recursive image processing function, ONLY CALL IF IT ISNT ALREADY RUNNING
  if (!running){
    processImages();
    running = true;
  }

  let data = {
    activeCams: activeCams,
    bodiesFound: bodiesFound
  }
  res.status(200).json(data);
});//end post callback



export default router;