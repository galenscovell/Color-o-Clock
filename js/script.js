

function runHSLAClock() {
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  var timeString = currentSeconds + ":" + currentMinutes + ":" + currentHours;

  $('#clock').html(timeString);
  $('#info').html("hsla(" + (currentSeconds * 6) + ", " + ((currentMinutes * 1.5) + 10) + "%, " + (currentHours) + "%, 1)");
  $('#main_container').css("background", "hsla(" + (currentSeconds * 3) + ", " + ((currentMinutes * 1.5) + 10) + "%, " + currentHours + "%, 1)");
  $("#switch span").html("HEX");
};


function runHexClock() {
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
  $('#info').html(hexValue)
  $('#main_container').css("background", hexValue);
  $("#switch span").html("HSLA");
};


$(document).ready(function() {
  runHSLAClock();
  intervalHSLA = setInterval('runHSLAClock()', 1000);
});


$("#switch").click(function() {
  if ($("#switch span").text() == "HSLA") {
    clearInterval(intervalHex);
    runHSLAClock();
    intervalHSLA = setInterval('runHSLAClock()', 1000);
  } else {
    clearInterval(intervalHSLA);
    runHexClock();
    intervalHex = setInterval('runHexClock()', 1000);
  }
});
