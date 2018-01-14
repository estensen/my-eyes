const key_normal = "n", key_fast = "f", key_slow = "s";
let highlighted = key_normal;

const normal = () => {  highlighted = key_normal; setAudioPlayback(1); }
const slow = () =>   {  highlighted = key_slow; setAudioPlayback(0.7); }
const fast = () =>   {  highlighted = key_fast; setAudioPlayback(1.5); }

function setAudioPlayback(rate) {
    console.log(rate);
    const audio = document.getElementById("audio-controls");
    audio.playbackRate = rate;

    document.getElementById("img_slow").src = "imgs/slow.png";
    document.getElementById("img_normal").src = "imgs/normal.png";
    document.getElementById("img_fast").src = "imgs/fast.png";

    if (highlighted === key_slow)
        document.getElementById("img_slow").src = "imgs/inverted_slow.png";
    if (highlighted === key_normal)
        document.getElementById("img_normal").src = "imgs/inverted_normal.png";
    if (highlighted === key_fast)
        document.getElementById("img_fast").src = "imgs/inverted_fast.png";
}

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("slow").addEventListener("click", () => { slow(); });
    document.getElementById("fast").addEventListener("click", () => { fast(); });
    document.getElementById("normal").addEventListener("click", () => { normal(); });
});
