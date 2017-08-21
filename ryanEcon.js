// this is a reference to the text input form
var numInput = document.getElementById('input-number');
// this is a reference to the paragraph which we will store our results in
var resultSpace = document.getElementById('com1');
// this just makes sure we don't do the same math twice
var last;
// this function is responsible for doing the math and updating the value
function updateValue() {
  // this gets the input and converts it to a number
  var input = Number(numInput.value);
  if (input != last) { //just making sure we haven't entered the same thing twice.
    console.log(input);
    if (!isNaN(input)) { //check that it's a number
      resultSpace.innerHTML = input * 3; // set the contents of the paragraph
    } else {
      resultSpace.innerHTML = "that's not a number!";
    }
    last = input;
  }
}
//numInput func here
numInput.onkeyup = updateValue;
numInput.onkeydown = updateValue;

var numInput = document.getElementById('input-number');
var resultSpace = document.getElementById('com2');
var last;
function updateValue() {
  var input = Number(numInput.value);
  if (input != last) {
    console.log(input);
    if (!isNaN(input)) {
      resultSpace.innerHTML = input * 5;
    } else {
      resultSpace.innerHTML = "that's not a number!";
    }
    last = input;
  }
}
numInput.onkeyup = updateValue;
numInput.onkeydown = updateValue;

var numInput = document.getElementById('input-number');
var resultSpace = document.getElementById('com3');
var last;
function updateValue() {
  var input = Number(numInput.value);
  if (input != last) {
    console.log(input);
    if (!isNaN(input)) {
      resultSpace.innerHTML = input * 10;
    } else {
      resultSpace.innerHTML = "that's not a number!";
    }
    last = input;
  }
}
numInput.onkeyup = updateValue;
numInput.onkeydown = updateValue;

var numInput = document.getElementById('input-number');
var resultSpace = document.getElementById('com4');
var last;
function updateValue() {
  var input = Number(numInput.value);
  if (input != last) {
    console.log(input);
    if (!isNaN(input)) {
      resultSpace.innerHTML = input * 100;
    } else {
      resultSpace.innerHTML = "that's not a number!";
    }
    last = input;
  }
}
numInput.onkeyup = updateValue;
numInput.onkeydown = updateValue;
