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
