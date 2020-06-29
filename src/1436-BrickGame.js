var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// First line is the number of test cases
const N = lines.shift();
// Ignoring last empty line
lines.pop();

lines.forEach( (line, index) => {
  const testCase = line.split(' ');
  const numberOfPlayers = testCase.shift();
  const captainPosition = Math.trunc(numberOfPlayers / 2);
  const captainAge = testCase[captainPosition];
  console.log(`Case ${index+1}: ${captainAge}`);
});
