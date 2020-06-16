var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B] = lines.map(x => parseInt(x));
const SOMA = A + B;

console.log('SOMA = ' + SOMA);