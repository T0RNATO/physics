var trcont = "<tr>" + String("<td onclick='summon(this)'></td>").repeat(50) + "</tr>";
document.getElementById("thingo").innerHTML = trcont.repeat(25);
var cells = document.getElementsByTagName("td");
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
setInterval(grav, 100);
for (var i = 0; i < 1250; i++) {
    cells[i].id = String(alphabet[Math.floor(i / 25)]) + String((i % 25) + 1);
}
function grav() {
  for (var o = 1249; o >= 0; --o) {
    if (cells[o].classList.contains("on")) {
      if (alphabet.indexOf(cells[o].id.charAt(0)) < 24) {
        if (!document.getElementById(String((alphabet[alphabet.indexOf(cells[o].id.charAt(0)) + 1] + cells[o].id.substring(1)))).classList.contains("on")) {
          document.getElementById((alphabet[alphabet.indexOf(cells[o].id.charAt(0)) + 1] + cells[o].id.substring(1))).classList.add("on");
          cells[o].classList.remove("on");
        }
      }
    }
  }
}
function reset() {
  for (var i = 0; i < 1250; i++) {
    cells[i].classList.remove("on");
  }
}
function summon(me) {
  me.classList.add("on");
}
