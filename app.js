//Properties / Selectors





//Functions

generateHex = () => {
  const letters = '123456789ABCDEF'
  let hash = '#'
  for (let i=0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  return hash
}

let randomHex = generateHex();
console.log(randomHex);