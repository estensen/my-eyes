const submitForm = () => {
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
        $("#audio-controls").attr("src", "/audio/" + response.audio)
    });
}

const daisy = () => {
    //$('#imgForm').submit();
    $("#capture-btn").click();
}

$("document").ready(function(){
    $("#capture-btn").change(function() {
        submitForm();
    });
});
