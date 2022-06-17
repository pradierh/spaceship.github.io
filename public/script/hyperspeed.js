let hugo = document.getElementById("hugo");
document.getElementById("buttonspeed").addEventListener("click", function() {
    hugo.classList.toggle("display");
    let cockpit = document.getElementById("cockpit");
    cockpit.style.marginTop = "-24px";
});

document.getElementById("buttonland").onclick = function () {
    location.href = "./public/html/landing.html";
};