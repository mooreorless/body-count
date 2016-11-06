import async from 'async';
import easyimg from 'easyimage';
import cv from 'opencv';

let activeCams = [];
let bodiesFound = [];
let picture = '';


export const updateActiveCams = (url) => {
  //only push it on if it isnt already in the activeCams array
  if (activeCams.indexOf(url) == -1 && activeCams.length < 10) {
    activeCams.push(url);
    console.log('updated activeCams' + activeCams);
  }
  //only remove it if it already exists in the active cams array
  else {
    activeCams.splice(activeCams.indexOf(url), 1);
  }

  activeCams.forEach(function (item, index) {
    console.log(item);
  });

}

export const countBodies = (callback) => {
  bodiesFound = [];
  let completed = 0;
  let toComplete = activeCams.length;
  console.log(toComplete + 'cams to process');
  async.forEachOf(activeCams, (item, index, callback) => {
    let split = item.split('/');
    // Strips image filename from url
    let imgPath = './assets/img/people.jpg';
    
        cv.readImage(imgPath, function (err, im) {
          if (err) console.log('Error in readImage: ' + err);
          im.detectObject('node_modules/opencv/data/haarcascade_mcs_upperbody.xml', {}, function (err, bodies) {
            if (err) console.log('Error in detectObject: ' + err);
            console.log('done reading image number ' + index + ' and found ' + bodies);
            bodiesFound[index] = bodies;
            completed++;
            console.log('completed is ' + completed + ' for item number ' + index);
            callback();
          });
        });
  }, (err) => {
    if (err) {
      console.log(err);
      return callback();
    }
    console.log('final callback got reached!');
    console.log(bodiesFound);
    return callback();
  });//end async.each
};


export const processImages = () => {
  console.log(activeCams.length);
  //call functions in order

  async.waterfall(
    [(callback) => {
      //get data from image
      countBodies(callback);
    }
    ],
    (err, bodies) => {
      console.log('waiting 5 seconds to process images');
      setTimeout(processImages, 1500);
      // processImages();
    }
  );//end waterfall
};
