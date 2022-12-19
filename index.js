const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const firstPassEl = document.getElementById("first-pass");
const secondPassEl = document.getElementById("second-pass");
const passwordLength = 12;

function getRandomChar() {
  let rndmChar = Math.floor(Math.random() * characters.length);
  return characters[rndmChar];
}

function generateRandomPassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += getRandomChar();
  }
  return password;
}

function renderPass() {
  firstPassEl.textContent = generateRandomPassword();
  secondPassEl.textContent = generateRandomPassword();
}

function copyFirstToClipboard() {
  navigator.clipboard.writeText(firstPassEl.textContent);
  alert("Password Copied");
}

function copySecondToClipboard() {
  navigator.clipboard.writeText(secondPassEl.textContent);
  alert("Password Copied");
}
