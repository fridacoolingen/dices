
let randomNumber1 = () => Math.floor(Math.random() * 6 + 1);
randomNumber1 = randomNumber1();

let randomNumber2 = () => Math.floor(Math.random() * 6 + 1);
randomNumber2 = randomNumber2();

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const headerContent = document.querySelector("h1");
const resetButton = document.querySelector("#reset");


if (randomNumber1 > randomNumber2) {
  headerContent.innerHTML = `🏆 Player One wins!`;
} else if (randomNumber1 < randomNumber2) {
  headerContent.innerHTML = `Player Two wins! 🏆`;
} else if (randomNumber1 == randomNumber2) {
  headerContent.innerHTML = `Draw!`;
}

img1.src = `images/dice${randomNumber1}.png`;
img2.src = `images/dice${randomNumber2}.png`;
