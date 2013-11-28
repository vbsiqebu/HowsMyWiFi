function startTest() {
  console.log("Loading!")
  var imageAddr = "simple.jpg" + "?n=" + Math.random();
  var startTime, endTime;
  var byteDownloadSize = 530402;

  var download = new Image();
  download.onload = function () {
      endTime = (new Date()).getTime();
      showResults(endTime, startTime, byteDownloadSize);
  }
  startTime = (new Date()).getTime();
  download.src = imageAddr;
  $('#msg').html("Testing..."); 
};


function showResults(endTime, startTime, byteDownloadSize) {
  var duration = (endTime - startTime) / 1000;
  var bitsLoaded = byteDownloadSize * 8;
  var speedBps = (bitsLoaded / duration).toFixed(2);
  var location = "Cyberport";
  var message = "Your connection speed is: \n"
  var speed = speedBps + " bps\n"
        
  $('#msg').html(message);
  $('#speed').html(speed);
  $('#location').html(location);
};