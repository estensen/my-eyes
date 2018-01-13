const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

const fileName = './sampleText.png';

// Performs text detection on the local file
client
  .documentTextDetection(fileName)
  .then(results => {
    const fullTextAnnotation = results[0].fullTextAnnotation;
    console.log(fullTextAnnotation.text);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
