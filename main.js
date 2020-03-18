var video = document.querySelector('video');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(function(stream) {
        video.srcObject = stream;
       video.onloadedmetadata = function(e) {
         video.play();
       };
    });

video.addEventListener("click", () => video.requestFullscreen())
