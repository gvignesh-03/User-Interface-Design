function notes() {
    var x = document.getElementById("notes");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}
function onlink(x) {
    x.style.backgroundColor="rgb(25, 235, 155)";
}

function offlink(x) {
    x.style.backgroundColor="lightgray";
}

function hofflink(x) {
  x.style.backgroundColor="#4CAF50";
}
