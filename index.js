require('dotenv').load();
const crypto = require("crypto");
const mime = require("mime");
const express = require("express");
const cfenv = require("cfenv");
const bodyParser = require('body-parser')
const vision = require('@google-cloud/vision');
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const fs = require('fs');
const multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});
var upload = multer({ storage: storage });

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs text detection on the local file
const convert_image_to_text = (fileName, res) => {
    client
        .documentTextDetection(fileName)
        .then(results => {
            const fullTextAnnotation = results[0].fullTextAnnotation;
            return fullTextAnnotation.text;
        })
        .then(text => {
            var transcript = text_to_speech.synthesize(text_params(text));
            transcript.pipe(res);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}

const makeid = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const text_to_speech = new TextToSpeechV1({
    username: process.env.USERNAME,
    password: process.env.PASSWORD
});

const text_params = (text_to_speech) => {
    return {
    text: text_to_speech,
    voice: 'en-US_AllisonVoice',
    accept: 'audio/mp3'
}};

app.post('/upload', upload.single('file_input'), function (req, res, next) {
    console.log(req.file.filename);
    res.json({'audio': req.file.filename});
})


app.post('/image', function(req, res, next) {
    console.log(req);
    const data = req.body.img
    const fileName = makeid();
    fs.writeFile(fileName, data, 'base64', function(err){
        res.end(fileName)
    });
});

app.get('/audio/:img', function(req, res, next) {
    convert_image_to_text("uploads/"+req.params.img, res);
});

app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
