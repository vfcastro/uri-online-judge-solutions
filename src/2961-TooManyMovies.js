var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Number of years (block) of input
const numberOfYears = lines.shift();
// Hits by each of the four categories
const hitsByCategory = {1:0, 2:0, 3:0, 4:0};

for(let i = 0; i < numberOfYears; i++) {
  // Skip "Palpites" line
  lines.shift();

  // Get the 4 guesses
  const guesses = lines.splice(0,4);

  // Skip "Vencedores" line
  lines.shift();

  // Get the 4 winners
  const winners = lines.splice(0,4);

  // Check guesses
  guesses.forEach( (guess,index) => {
    if(guess === winners[index]){
      hitsByCategory[index+1]++;
    }
  });
}

const hitsByCategoryArray = Object.values(hitsByCategory);

// All guesses were right/wrong by the same number
if(hitsByCategoryArray.every( (hits, i, arr) => hits === arr[0])){
  console.log(arrayToOutput(Object.keys(hitsByCategory)));
}
else {
  // Get the worst category guesses and prints out
  const minHits = Math.min(...hitsByCategoryArray);
  const worstCategories = getKeysByValue(hitsByCategory,minHits);
  console.log(arrayToOutput(worstCategories));
}

function getKeysByValue(object, value) {
  return Object.keys(object).filter(key => object[key] === value);
}

function arrayToOutput(arr) {
  return arr.toString().replace(/,/g,' ')
}