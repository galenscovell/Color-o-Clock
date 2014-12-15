

function runClock() {
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  var timeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  var hexValue = "#" + currentHours + currentMinutes + currentSeconds;

  $('#clock').html(timeString);
  $('#hex').html(hexValue);
  $('#main_container').css("background", hexValue);
};


$(document).ready(function() {
  runClock();
  setInterval('runClock()', 1000);
});