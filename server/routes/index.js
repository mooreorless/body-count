import express from 'express';
import axios from 'axios';


import options from '../config';
import { countBodies, processImages } from '../helpers';

const router = express.Router();

const instance = axios.create({
  baseURL: options.url,
  timeout: options.timeout,
  headers: options.headers
});

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

router.get('/cameras', (req, res) => {
  let search = req.query['search'];

  instance.get(`/webcams/list/category=${search}?show=webcams:location,image,url`)
    .then((response) => {
      const webcams = response.data.result.webcams;

      res.status(200).json(webcams);
      // res.send(webcams);
    })
    .catch((error) => {
      console.log(error);
    })

});


export default router;