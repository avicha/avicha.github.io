//这段代 主要是获取摄像头的视频流并显示在Video 签中
window.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = {
            "video": true
        },
        errBack = function(error) {
            window.alert("Video capture error: ", error.code);
        };



    //navigator.getUserMedia这个写法在Opera中好像是navigator.getUserMedianow
    if (navigator.getUserMedia) {
        navigator.getUserMedia(videoObj, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if (navigator.webkitGetUserMedia) {
        navigator.webkitGetUserMedia(videoObj, function(stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
    window.setInterval(function() {
        context.drawImage(video, 0, 0, 330, 250);
    }, 1000)
}, false);
window.onerror = function(e) {
    alert(e.stack);
}