
export const countBodies = (callback) => {
  activeCams.forEach((camera) => {
    async.waterfall(
      [(callback) => {
        //get data from image
        console.log('getting image data for ' + camera);
        easyimg.info(camera)
          .then((file) => {
            console.log('done getting image data for ' + camera);
            return callback();
          });
      },
      (callback) => {
        //resize the image for OpenCV, THIS IS REQUIRED
        console.log('resizing ' + camera);
        easyimg.resize({
          width: 960,
          src: camera,
          dst: camera
        })
          .then((camera) => {
            console.log('done resizing ' + camera);
            return callback();
          });
      },
      (callback) => {
        //read the image with openCV
        console.log('reading image ' + camera);
        cv.readImage(camera, callback);
      },
      (im, callback) => {
        //run body detection on image
        console.log('detecting bodies in ' + camera);
        //update our constiable for storing body counts
        bodiesIndex++;
        im.detectObject('node_modules/opencv/data/haarcascade_fullbody.xml', {}, callback);
      }
      ],
      (err, bodies) => {
        bodiesFound[bodiesIndex] = bodies;
        console.log(bodiesFound);
        return callback();
      }
    );//end waterfall
  });//end if 
};


export const processImages = (req, res, activate) => {
  console.log('processImages being called');
  bodiesIndex = 0;
  console.log(activeCams.length);
  //call functions in order

  async.waterfall(
    [(callback) => {
      //get data from image
      countBodies(callback);
    }
    ],
    (err, bodies) => {
      setTimeout(processImages, 5000);
    }
  );//end waterfall
};