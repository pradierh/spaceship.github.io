function fontfamily() {
  var paragraph = document.getElementById("yolo");
  paragraph.style.fontFamily = "arial";
  text.style = "font-family: arial;"  ;
}

const text = document.getElementById("text");
const title = document.getElementById("title");

text.onmouseover = function () {
  text.innerHTML =
    "Length. 13.4 meters (44 ft) Width. 11.76 meters (38 ft 7 in) Height/depth. 2.4 meters (8 ft 1 in) Mass. 10 metric tons.<br> Maximum acceleration. 3,700 G. Maximum atmospheric speed. 1,050 kph.";
  title.innerHTML = "Connected";
};

text.onmouseout = function () {
  text.innerHTML = "Place your mouse here For connected";
  title.innerHTML = "Connecting_";
};