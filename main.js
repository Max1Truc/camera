var video = document.querySelector('video');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var image = document.querySelector('img');
//navigator.getUserMedia = navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//.then(stream => video.srcObject = stream);
//navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
//	navigator.mediaDevices.getUserMedia({ video: true, audio: true });

window.URL = window.URL || window.webkitURL;


function snapshot() {
    var cw = video.clientWidth;
    var ch = video.clientHeight;
    ctx.drawImage(video, 0, 0, cw, ch, 0, 0, cw / 2, ch / 3);
    image.src = canvas.toDataURL();
    image.height = ch;
    image.width = cw;
}

video.addEventListener('click', snapshot, false);

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(function(stream) {
        video.srcObject = stream;
       //video.src = window.URL.createObjectURL(stream);
       video.onloadedmetadata = function(e) {
         video.play();
       };
    });
