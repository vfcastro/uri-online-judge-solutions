var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B] = lines.map(x => parseInt(x));
const PROD = A * B;

console.log('PROD = ' + PROD);