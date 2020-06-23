var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numberOfTests = lines.shift();
lines.pop();
lines.forEach(line => {
  const [rajesh, sheldon] = line.split(' ');

  const outcomes = {
    'pedra lagarto': 'rajesh',
    'pedra tesoura': 'rajesh',
    'papel pedra': 'rajesh',
    'papel spock': 'rajesh',
    'tesoura papel': 'rajesh',
    'tesoura lagarto': 'rajesh',
    'lagarto spock': 'rajesh',
    'lagarto papel': 'rajesh',
    'spock tesoura': 'rajesh',
    'spock pedra': 'rajesh',

    'pedra spock': 'sheldon',
    'pedra papel': 'sheldon',
    'papel tesoura': 'sheldon',
    'papel lagarto': 'sheldon',
    'tesoura spock': 'sheldon',
    'tesoura pedra': 'sheldon',
    'lagarto pedra': 'sheldon',
    'lagarto tesoura': 'sheldon',
    'spock lagarto': 'sheldon',
    'spock papel': 'sheldon',

    'pedra pedra': 'empate',
    'papel papel': 'empate',
    'tesoura tesoura': 'empate',
    'lagarto lagarto': 'empate',
    'spock spock': 'empate'
  }

  console.log(outcomes[line]);
});