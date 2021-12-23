const numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "white";
  })
}

// const audio = new Audio('sounds/tom-4.mp3');
// audio.play();