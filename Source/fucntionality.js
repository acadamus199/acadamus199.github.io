var img = document.getElementById("middle_image")
var theme_img = document.getElementById("middle");
var r = document.getElementById("right");
var l = document.getElementById("left");
var up = document.getElementById("middle_top");

const tab = [0, 1, 2, 3, 4];
const themes = ["day", "night", "fall", "winter", "love"];
const colors_up = ["#FFBB33", "#373B30", "#FFBB33", "#CFFFFF", "#C43952"];
const colors_l_r = ["#E8BA23", "#2E2E2E", "#E8BA23", "#F2FFFF", "#D8354E"]
var i = 0;
var checker = true;

let a = prompt("Jak masz na imię? ");
if (a == "" && !isNaN(a) && a != "Agata" && a != "Agatka" && a != "Słoneczko" && a != "Skarbek") {
    alert("To nie dla ciebie");
    window.close();
}

document.getElementById("right_arrow").addEventListener("click", function () {
    if (checker) {
        var aud = document.createElement("audio");
        aud.src = "Source/music.mp3";
        aud.preload = true;
        aud.autoplay = true;
        aud.volume = 0.1;
        aud.play();
        checker = false;
    }
    if (tab[i] < 4)
        i++;
    else
        i = 0

    if (i == 1)
        up.style.color = "white";
    else
        up.style.color = "black";

    img.src = `Source/${tab[i]}.jpg`;
    theme_img.style.backgroundImage = `url(Source/${themes[i]}.jpg)`;
    r.style.backgroundColor = `${colors_l_r[i]}`;
    l.style.backgroundColor = `${colors_l_r[i]}`;
    up.style.backgroundColor = `${colors_up[i]}`;
})

document.getElementById("left_arrow").addEventListener("click", function () {
    if (tab[i] > 0)
        i--;
    else
        i = 4;

    if (i == 1)
        up.style.color = "white";
    else
        up.style.color = "black";

    img.src = `Source/${tab[i]}.jpg`;
    theme_img.style.backgroundImage = `url(Source/${themes[i]}.jpg)`;
    r.style.backgroundColor = `${colors_l_r[i]}`;
    l.style.backgroundColor = `${colors_l_r[i]}`;
    up.style.backgroundColor = `${colors_up[i]}`;
})
