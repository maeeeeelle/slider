// var range = document.querySelector(".slider-range");
// var imageAfter = document.querySelector(".slider-image-after");
// var separator = document.querySelector(".slider-separator");
// var handler = document.querySelector(".slider-handler");

// var updatePosition = function () {
//   var position = range.value + "%";
//   imageAfter.style.width = position;
//   separator.style.left = position;
// };

// range.addEventListener("input", updatePosition);

var range = document.querySelector(".slider-range");
var imageAfter = document.querySelector(".slider-image-after");
var separator = document.querySelector(".slider-separator");
var handler = document.querySelector(".slider-handler");

var updatePosition = function () {
  var rawValue = parseInt(range.value);

  var minLimit = 10;
  var maxLimit = 90;

  var limitedValue = Math.max(minLimit, Math.min(rawValue, maxLimit));

  if (limitedValue !== rawValue) {
    range.value = limitedValue;
  }

  var position = limitedValue + "%";
  imageAfter.style.width = position;
  separator.style.left = position;

  handler.classList.remove(
    "slider-handler-left",
    "slider-handler-middle",
    "slider-handler-right"
  );

  if (limitedValue < 40) {
    handler.classList.add("slider-handler-left");
  } else if (limitedValue > 60) {
    handler.classList.add("slider-handler-right");
  } else {
    handler.classList.add("slider-handler-middle");
  }
};

updatePosition();

range.addEventListener("input", updatePosition);
