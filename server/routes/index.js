import express from 'express';

// import options from './config';

import { countBodies, processImages } from '../helpers';

const router = express.Router();

let activeCams = [];
let bodiesFound = [];
let bodiesIndex = 0;
let running = false;

//post form to server
router.get('/upload', function (req, res, next) {

  // grab the urls to add to and remove from the array
  var activate = req.query['activate'];
  var deactivate = req.query['deactivate'];
  console.log('deactivate is ' + deactivate);
  //only push it on if it isnt already in the activeCams array
  if (activeCams.indexOf(activate) == -1) {
    activeCams.push(activate);
  }
  //get the index of the cam to be deactivated, will be -1 if its not in the array
  deactivateIndex = activeCams.indexOf(deactivate);
  //only remove it if it already exists in the active cams array
  if (deactivateIndex > -1) {
    activeCams.splice(deactivateIndex, 1);
  }
  activeCams.forEach(function (item, index) {
    console.log(item);
  });

  //call recursive image processing function
  if (!running) {
    processImages();
    running = true;
  }

  setTimeout(function () {
    const camera = {
      filename: activate,
      activeCams: activeCams,
    }

    return res.status(200).json(camera);
  }, 3000);
});//end post callback



export default router;