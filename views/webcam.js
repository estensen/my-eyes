const submitFile = (file) => {
    var formData = new FormData();

    formData.append("file_input", file);

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
    $("#capture-btn").change(function(e) {
        const file = e.target.files[0];
        if (!file) { return; }

        new ImageCompressor(file, {
            quality: .6,
            success(result) {
                submitFile(result);
            },
            error(e) {
                console.log(e.message);
            },
        });
    });
});
