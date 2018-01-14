require('dotenv').load();
const express = require("express");
const app = express();
const cfenv = require("cfenv");
const bodyParser = require('body-parser')
const vision = require('@google-cloud/vision');
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Creates a client
const client = new vision.ImageAnnotatorClient();

const fileName = './sampleText.png';

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

app.get('/audio/:w', function(req, res, next) {
    const data = req.params.w //.replace(/^data:image\/\w+;base64,/, '');
    const fileName = makeid();
    var img = new Buffer(data, 'base64');
    fs.writeFile(fileName, img, 'base64', function(err){
        console.log(err);
        convert_image_to_text(fileName, res);
    });
});

app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
