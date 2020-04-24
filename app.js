//Global Selection and Variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHex = document.querySelectorAll(".color h2");
let initalColors;

//Functions
generateHex = () => {
  const hexColor = chroma.random();
  return hexColor;
};

randomColors = () => {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    //Adding it to the background
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
    //Check for contrast
    checkTextContrast(randomColor, hexText);
    //Initial Colorize Sliders
    const color = chroma(randomColor);
    const sliders = div.querySelectorAll('.sliders input')
    console.log(sliders);
  });
};

checkTextContrast = (color, text) => {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "black";
  } else {
    text.style.color = "white";
  }
};

randomColors();
