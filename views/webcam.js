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
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    var img = getImg(canvas.toDataURL());
    post_image(img);
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

function getImg(dataURL){
      return dataURL.replace(/^data:image\/\w+;base64,/, "");
}

$('#form').submit(function(e){
    e.preventDefault();
    var formData = new FormData();
    var fileField = document.querySelector("input[type='file']");

    formData.append("file_input", fileField.files[0]);

    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(response => {
        $("#audio").attr("src", "/audio/" + response.audio)
    });
});

function post_image(image) {
    $.ajax({
        url: "/image",
        type: "POST",
        data: {
            img: image
        },
        cache: false,
        timeout: 5000,
        complete: function() {
            //called when complete
            console.log('process complete');
        },

        success: function(data) {
            $("#audio").attr("src", "/audio/" + data)
            console.log(data);
            console.log('process sucess');
        },

        error: function() {
            console.log('process error');
        },
    });
}

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia(constraints)
        .then(handleSuccess)
        .catch(handleError);
}

