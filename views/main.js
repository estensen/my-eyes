const normal = () => {  setAudioPlayback(1); }
const slow = () =>   {  setAudioPlayback(0.7); }
const fast = () =>   {  setAudioPlayback(1.5); }

function setAudioPlayback(rate) {
    const audio = document.getElementById("audio-controls");
    audio.playbackRate = rate;
}

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("slow").addEventListener("click", () => { slow(); });
    document.getElementById("fast").addEventListener("click", () => { fast(); });
    document.getElementById("normal").addEventListener("click", () => { normal(); });

    $(".btn").click(function(){
        console.log("Clicked");
        $(".btn").removeClass("active");
        $(this).addClass("active");
    });
});
