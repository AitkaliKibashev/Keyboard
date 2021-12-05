const keyboardContainer = document.querySelector(".keyboard-container");

const keys = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Del",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Caps",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "Shift",
];

keys.forEach((k) => {
  const key = document.createElement("div");
  key.className = "key";
  key.textContent = k;

  if (k.length > 1) {
    switch (k) {
      case "shift":
        key.className = "key shift";
        break;
      case "enter":
        key.className = "key enter";
        break;
      default:
        key.className = "key func";
    }
  }
  keyboardContainer.appendChild(key);
});

const randomKey = () => {
  const keysWithoutFuncKeys = keys.filter((k) => k.length < 2);
  return keysWithoutFuncKeys[
    Math.floor(Math.random() * keysWithoutFuncKeys.length)
  ];
};

const keyEls = document.querySelectorAll(".key");
let jiggleKey = null;

const jiggleGame = () => {
  const random = randomKey();

  keyEls.forEach((k) => {
    if (k.textContent === random) {
      k.classList.add("jiggle");
      jiggleKey = k;
    }
  });
};

document.addEventListener("keypress", (e) => {
  if (e.key === jiggleKey.textContent) {
    jiggleKey.classList.remove("jiggle");
    jiggleGame();
  }
});

jiggleGame();
