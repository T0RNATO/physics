var cells = Array(document.getElementsByTagName("td"));
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for (var i = 0; i < 625; i++) {
    console.log(cells[0]);
    cells[i].id = String(alphabet[Math.floor(i / 25)]) + String((i % 25) + 1);
}
setInterval(grav, 100);
function place() {
  document.getElementById(document.getElementById("input").value).classList.add("on");
}
function grav() {
  for (var o = 624; o >= 0; --o) {
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
  for (var i = 0; i < 625; i++) {
    cells[i].classList.remove("on");
  }
}
console.log(cells[0]);
