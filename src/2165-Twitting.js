var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const T = lines.shift();

T.length <= 140 ? console.log("TWEET") : console.log("MUTE");