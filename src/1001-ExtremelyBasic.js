var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines.map(x => parseInt(x));
const x = a + b;

console.log('X = ' + x);