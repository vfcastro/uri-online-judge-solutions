var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines.shift());
const weightA = 0.35;
const B = parseFloat(lines.shift());
const weightB = 0.75;

const MEDIA = ((A * weightA) + (B * weightB)) / (weightA + weightB);
console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
