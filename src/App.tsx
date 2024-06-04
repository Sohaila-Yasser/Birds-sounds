import "./App.css";

const buttons = document.querySelectorAll(".button").length;

for (let i = 0; i < buttons; i++) {
  document
    .querySelectorAll(".button")
    [i].addEventListener("click", function () {
      const buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
    });
}

document.addEventListener("keypress", function (event) {
  sound(event.key);
  animation(event.key);
});

function sound(key) {
  switch (key) {
    case "B":
      var sound1 = new Audio(
        "https://www.math.stonybrook.edu/~tony/birds/sounds/amoriole2.mp3",
      );
      sound1.play();
      break;

    case "I":
      var sound2 = new Audio(
        "https://www.math.stonybrook.edu/~tony/birds/sounds/bobwhite.mp3",
      );
      sound2.play();
      break;

    case "R":
      var sound3 = new Audio(
        "https://www.math.stonybrook.edu/~tony/birds/sounds/cardinal1.mp3",
      );
      sound3.play();
      break;

    case "D":
      var sound4 = new Audio(
        "https://www.math.stonybrook.edu/~tony/birds/sounds/96sounds/songsparrow4bm.mp3",
      );
      sound4.play();
      break;

    case "S":
      var sound5 = new Audio(
        "https://www.math.stonybrook.edu/~tony/birds/sounds/loon1m.mp3",
      );
      sound5.play();
      break;
    default:
      console.log(key);
  }
}

function animation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");

  setTimeout(function () {
    activeButton.classList.remove("animation");
  }, 100);
}

$(document).ready(function () {
  $("#t").addClass("animated bounce");
});
