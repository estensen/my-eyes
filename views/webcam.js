//
// Web Camp
//

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video');
var canvas = window.canvas = document.querySelector('canvas');

canvas.width = 480;
canvas.height = 360;

var button = document.querySelector('button');
button.onclick = function () {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    //canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    var img1 = new Image(); // HTML5 Constructor
    img1.src = '../sampleText.png';
    canvas.getContext('2d').drawImage(img1, 0, 0, canvas.width, canvas.height);
};

var constraints = {
    audio: false,
    video: true
};

function handleSuccess(stream) {
    window.stream = stream; // Make stream available to browser console
    video.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError);
