var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
const R = parseFloat(lines.shift());
const A = pi * R * R;

console.log('A='+A.toFixed(4));