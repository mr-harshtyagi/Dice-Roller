var btn = document.getElementById('roll-button');
var img = document.getElementById('dice-image');
var mssg = document.getElementById('message');
var toast = document.getElementById('roll-success');

btn.onclick = function() {

  mssg.style.color = "#8f8f8f";
  var r = Math.random() * 6;
  r = Math.ceil(r);
  if (r == 1) {
    img.src = "images/1.png";
    mssg.innerHTML = "You got '1'";
  }
  if (r == 2) {
    img.src = "images/2.png";
    mssg.innerHTML = "You got '2'";
  }
  if (r == 3) {
    img.src = "images/3.png";
    mssg.innerHTML = "You got '3'";
  }
  if (r == 4) {
    img.src = "images/4.png";
    mssg.innerHTML = "You got '4'";
  }
  if (r == 5) {
    img.src = "images/5.png";
    mssg.innerHTML = "You got '5'";
  }
  if (r == 6) {
    img.src = "images/6.png";
    mssg.innerHTML = "🎉 YAYY!! You got '6' 🎉";
    mssg.style.color = "#1aa260";
  }
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 500);
}
