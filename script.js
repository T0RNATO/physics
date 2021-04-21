var trcont = "<tr>" + String("<td onclick='summon(this)'></td>").repeat(25) + "</tr>";
document.getElementById("thingo").innerHTML = trcont.repeat(25);
var cells = document.getElementsByTagName("td");
var selected = "black";
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y"];
setInterval(loop, 100); //start a loop of the gravity function
for (var i = 0; i < 625; i++) { //loop through all cells
    cells[i].id = String(alphabet[Math.floor(i / 25)]) + String((i % 25) + 1); //and give them an id eg "a1" or "h9"
}
function loop() {
  for (var o = 600; o >= 0; --o) { //loop through all cells
    if (cells[o].classList.contains("on")) { //if the current cell is on
      if (cells[o].id.charAt(0) != "y") { //if the current cell is not on the bottom
        if (!document.getElementById(String((alphabet[alphabet.indexOf(cells[o].id.charAt(0)) + 1] + cells[o].id.substring(1)))).classList.contains("on")) { //if the cell below is NOT on
          document.getElementById((alphabet[alphabet.indexOf(cells[o].id.charAt(0)) + 1] + cells[o].id.substring(1))).classList.add("on"); //change the cell below to be on
          document.getElementById((alphabet[alphabet.indexOf(cells[o].id.charAt(0)) + 1] + cells[o].id.substring(1))).style.setProperty("--hex", getComputedStyle(cells[o]).getPropertyValue('--hex')); //set the colour of the cell below
          cells[o].classList.remove("on"); //make the current cell off
        }
      }
    }
  }
}
function reset() {
  for (var i = 0; i < 625; i++) { //loop through all cells
    cells[i].classList.remove("on"); //and turn them off
  }
}
function summon(me) {
  me.classList.add("on"); //turn the clicked cell on
  me.style.setProperty("--hex", selected) //set the colour of the clicked cell to the selected colour
}
function color(hex) {
  selected = hex
}
