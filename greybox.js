//this guy 
function foo() {
  var x = roll100();
  var d;
  var c;
    c = document.getElementById('WBtd');
  d = document.getElementById('WB');
  c.innerHTML = x;
  d.style.backgroundColor = getRandomColor();

}
//this nerd rolls a random number, if its 5 or below it rolls again and subtracts the next number it rolls, if its 96 or above it rolls again but you add the next roll
function roll100() {
  var x = Math.floor(Math.random() * 100) + 1;
  if (x <= 5) {
    x = x - roll100();
  }
  else if (x >= 96) {
    x = x + roll100();
  }
  return x;
}
//this dude gets a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
