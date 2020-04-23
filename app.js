//Global Selection and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"');
const currentHex = document.querySelectorAll(".color h2");
let initialColors;

//Functions

generateHex = () => {
  const hexColor = chroma.random();
  return hexColor;
};

randomColors = () => {
  colorDivs.forEach((div, index) => {
    const HexText =  div.children[0];
    const randomColor = generateHex();
   
    //Add the color to the background
    div.style.backgroundColor = randomColor;
    HexText.innerText = randomColor;
  });
};

randomColors();